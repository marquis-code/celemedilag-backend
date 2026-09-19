"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SermonsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sermons_controller_1 = require("./sermons.controller");
const sermons_service_1 = require("./sermons.service");
const sermon_schema_1 = require("./schemas/sermon.schema");
let SermonsModule = class SermonsModule {
};
exports.SermonsModule = SermonsModule;
exports.SermonsModule = SermonsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: sermon_schema_1.Sermon.name, schema: sermon_schema_1.SermonSchema }])
        ],
        controllers: [sermons_controller_1.SermonsController],
        providers: [sermons_service_1.SermonsService],
    })
], SermonsModule);
//# sourceMappingURL=sermons.module.js.map