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
exports.LeadershipService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const leader_schema_1 = require("./schemas/leader.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let LeadershipService = class LeadershipService {
    leaderModel;
    updatesGateway;
    constructor(leaderModel, updatesGateway) {
        this.leaderModel = leaderModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createLeaderDto) {
        const newLeader = new this.leaderModel(createLeaderDto);
        const saved = await newLeader.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.leaderModel.find().sort({ createdAt: -1 }).lean().exec();
    }
    async findOne(id) {
        const leader = await this.leaderModel.findById(id).lean().exec();
        if (!leader) {
            throw new common_1.NotFoundException(`Leader #${id} not found`);
        }
        return leader;
    }
    async update(id, updateLeaderDto) {
        const leader = await this.leaderModel.findByIdAndUpdate(id, updateLeaderDto, { new: true }).exec();
        if (!leader)
            throw new common_1.NotFoundException(`Leader #${id} not found`);
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'update', data: leader });
        return leader;
    }
    async remove(id) {
        const deletedLeader = await this.leaderModel.findByIdAndDelete(id).exec();
        if (!deletedLeader) {
            throw new common_1.NotFoundException(`Leader #${id} not found`);
        }
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'remove', id });
        return deletedLeader;
    }
};
exports.LeadershipService = LeadershipService;
exports.LeadershipService = LeadershipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(leader_schema_1.Leader.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], LeadershipService);
//# sourceMappingURL=leadership.service.js.map