"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const setting_schema_1 = require("./schemas/setting.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let SettingsService = class SettingsService {
    settingModel;
    updatesGateway;
    constructor(settingModel, updatesGateway) {
        this.settingModel = settingModel;
        this.updatesGateway = updatesGateway;
    }
    async getSetting(key) {
        const setting = await this.settingModel.findOne({ key }).exec();
        if (!setting) {
            throw new common_1.NotFoundException(`Setting with key ${key} not found`);
        }
        return setting;
    }
    async getAllSettings() {
        return this.settingModel.find().exec();
    }
    async updateSetting(key, updateSettingDto) {
        const setting = await this.settingModel.findOneAndUpdate({ key }, { value: updateSettingDto.value }, { new: true, upsert: true }).exec();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'setting', key, data: setting });
        return setting;
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(setting_schema_1.Setting.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], SettingsService);
//# sourceMappingURL=settings.service.js.map