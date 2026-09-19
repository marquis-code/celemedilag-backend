import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HttpCacheInterceptor implements NestInterceptor {
    private readonly cache;
    private readonly logger;
    private readonly TTL_MS;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    private bustRelatedCaches;
}
