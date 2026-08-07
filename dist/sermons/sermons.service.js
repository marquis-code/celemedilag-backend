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
exports.SermonsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sermon_schema_1 = require("./schemas/sermon.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let SermonsService = class SermonsService {
    sermonModel;
    updatesGateway;
    constructor(sermonModel, updatesGateway) {
        this.sermonModel = sermonModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createSermonDto) {
        const newSermon = new this.sermonModel(createSermonDto);
        const saved = await newSermon.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'sermons', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.sermonModel.find().sort({ createdAt: -1 }).lean().exec();
    }
    async findOne(id) {
        const sermon = await this.sermonModel.findById(id).lean().exec();
        if (!sermon) {
            throw new common_1.NotFoundException(`Sermon #${id} not found`);
        }
        return sermon;
    }
    async remove(id) {
        const deletedSermon = await this.sermonModel.findByIdAndDelete(id).exec();
        if (!deletedSermon) {
            throw new common_1.NotFoundException(`Sermon #${id} not found`);
        }
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'sermons', action: 'remove', id });
        return deletedSermon;
    }
};
exports.SermonsService = SermonsService;
exports.SermonsService = SermonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sermon_schema_1.Sermon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], SermonsService);
//# sourceMappingURL=sermons.service.js.map