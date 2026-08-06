"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const mongoose_1 = __importDefault(require("mongoose"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: (origin, callback) => {
            callback(null, true);
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    mongoose_1.default.connection.on('connected', () => {
        common_1.Logger.log('🍃 Successfully connected to MongoDB database', 'Mongoose');
    });
    if (mongoose_1.default.connection.readyState === 1) {
        common_1.Logger.log('🍃 Successfully connected to MongoDB database', 'Mongoose');
    }
    mongoose_1.default.connection.on('error', (err) => {
        common_1.Logger.error(`❌ MongoDB connection error: ${err}`, 'Mongoose');
    });
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/api`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map