import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface CacheEntry {
  data: any;
  expiresAt: number;
}

@Injectable()
export class HttpCacheInterceptor implements NestInterceptor {
  private readonly cache = new Map<string, CacheEntry>();
  private readonly logger = new Logger('HttpCache');
  private readonly TTL_MS = 60_000; // 60 seconds

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method?.toUpperCase();

    // Only cache GET requests
    if (method !== 'GET') {
      // On any mutation, bust all caches for this resource path
      this.bustRelatedCaches(request.url);
      return next.handle();
    }

    const cacheKey = request.url;
    const now = Date.now();

    // Check cache
    const cached = this.cache.get(cacheKey);
    if (cached && cached.expiresAt > now) {
      // Set a header so the frontend knows it was cached
      const response = context.switchToHttp().getResponse();
      response.setHeader('X-Cache', 'HIT');
      return of(cached.data);
    }

    // Miss — run the handler and cache the result
    return next.handle().pipe(
      tap((data) => {
        this.cache.set(cacheKey, {
          data,
          expiresAt: now + this.TTL_MS,
        });
        const response = context.switchToHttp().getResponse();
        response.setHeader('X-Cache', 'MISS');
      }),
    );
  }

  /**
   * When a POST/PATCH/DELETE hits /api/news/123, bust all cached keys
   * that start with the base resource path (e.g. /api/news).
   */
  private bustRelatedCaches(url: string): void {
    // Extract the base resource path: /api/news/123 -> /api/news
    const segments = url.split('/').filter(Boolean);
    // Usually: ['api', 'resource', ...id]
    const basePath = '/' + segments.slice(0, 2).join('/');

    for (const key of this.cache.keys()) {
      if (key.startsWith(basePath)) {
        this.cache.delete(key);
      }
    }
  }
}
