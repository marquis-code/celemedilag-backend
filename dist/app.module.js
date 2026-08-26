"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const events_module_1 = require("./events/events.module");
const news_module_1 = require("./news/news.module");
const sermons_module_1 = require("./sermons/sermons.module");
const alumni_module_1 = require("./alumni/alumni.module");
const leadership_module_1 = require("./leadership/leadership.module");
const departments_module_1 = require("./departments/departments.module");
const gallery_module_1 = require("./gallery/gallery.module");
const settings_module_1 = require("./settings/settings.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const websockets_module_1 = require("./websockets/websockets.module");
const upload_module_1 = require("./upload/upload.module");
const stats_module_1 = require("./stats/stats.module");
const contact_module_1 = require("./contact/contact.module");
const patrons_module_1 = require("./patrons/patrons.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
                inject: [config_1.ConfigService],
            }),
            websockets_module_1.WebsocketsModule,
            upload_module_1.UploadModule,
            events_module_1.EventsModule,
            news_module_1.NewsModule,
            sermons_module_1.SermonsModule,
            alumni_module_1.AlumniModule,
            leadership_module_1.LeadershipModule,
            departments_module_1.DepartmentsModule,
            gallery_module_1.GalleryModule,
            settings_module_1.SettingsModule,
            auth_module_1.AuthModule,
            stats_module_1.StatsModule,
            contact_module_1.ContactModule,
            patrons_module_1.PatronsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map