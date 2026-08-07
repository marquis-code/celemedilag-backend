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
exports.AlumniService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const alumnus_schema_1 = require("./schemas/alumnus.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let AlumniService = class AlumniService {
    alumnusModel;
    updatesGateway;
    constructor(alumnusModel, updatesGateway) {
        this.alumnusModel = alumnusModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createAlumnusDto) {
        const newAlumnus = new this.alumnusModel(createAlumnusDto);
        const saved = await newAlumnus.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'alumni', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.alumnusModel.find().sort({ createdAt: -1 }).lean().exec();
    }
    async findOne(id) {
        const alumnus = await this.alumnusModel.findById(id).lean().exec();
        if (!alumnus) {
            throw new common_1.NotFoundException(`Alumnus #${id} not found`);
        }
        return alumnus;
    }
    async remove(id) {
        const deletedAlumnus = await this.alumnusModel.findByIdAndDelete(id).exec();
        if (!deletedAlumnus) {
            throw new common_1.NotFoundException(`Alumnus #${id} not found`);
        }
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'alumni', action: 'remove', id });
        return deletedAlumnus;
    }
};
exports.AlumniService = AlumniService;
exports.AlumniService = AlumniService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(alumnus_schema_1.Alumnus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], AlumniService);
//# sourceMappingURL=alumni.service.js.map