"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatronsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const patrons_service_1 = require("./patrons.service");
const patrons_controller_1 = require("./patrons.controller");
const patron_schema_1 = require("./schemas/patron.schema");
let PatronsModule = class PatronsModule {
};
exports.PatronsModule = PatronsModule;
exports.PatronsModule = PatronsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: patron_schema_1.Patron.name, schema: patron_schema_1.PatronSchema }])],
        controllers: [patrons_controller_1.PatronsController],
        providers: [patrons_service_1.PatronsService],
    })
], PatronsModule);
//# sourceMappingURL=patrons.module.js.map