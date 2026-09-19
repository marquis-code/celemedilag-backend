"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCacheInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let HttpCacheInterceptor = class HttpCacheInterceptor {
    cache = new Map();
    logger = new common_1.Logger('HttpCache');
    TTL_MS = 60_000;
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const method = request.method?.toUpperCase();
        if (method !== 'GET') {
            this.bustRelatedCaches(request.url);
            return next.handle();
        }
        const cacheKey = request.url;
        const now = Date.now();
        const cached = this.cache.get(cacheKey);
        if (cached && cached.expiresAt > now) {
            const response = context.switchToHttp().getResponse();
            response.setHeader('X-Cache', 'HIT');
            return (0, rxjs_1.of)(cached.data);
        }
        return next.handle().pipe((0, operators_1.tap)((data) => {
            this.cache.set(cacheKey, {
                data,
                expiresAt: now + this.TTL_MS,
            });
            const response = context.switchToHttp().getResponse();
            response.setHeader('X-Cache', 'MISS');
        }));
    }
    bustRelatedCaches(url) {
        const segments = url.split('/').filter(Boolean);
        const basePath = '/' + segments.slice(0, 2).join('/');
        for (const key of this.cache.keys()) {
            if (key.startsWith(basePath)) {
                this.cache.delete(key);
            }
        }
    }
};
exports.HttpCacheInterceptor = HttpCacheInterceptor;
exports.HttpCacheInterceptor = HttpCacheInterceptor = __decorate([
    (0, common_1.Injectable)()
], HttpCacheInterceptor);
//# sourceMappingURL=http-cache.interceptor.js.map