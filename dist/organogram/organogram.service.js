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
exports.OrganogramService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const organogram_schema_1 = require("./schemas/organogram.schema");
let OrganogramService = class OrganogramService {
    organogramModel;
    constructor(organogramModel) {
        this.organogramModel = organogramModel;
    }
    async create(createOrganogramDto) {
        const createdNode = new this.organogramModel(createOrganogramDto);
        return createdNode.save();
    }
    async findAll() {
        return this.organogramModel.find().sort({ order: 1 }).exec();
    }
    async findOne(id) {
        const node = await this.organogramModel.findById(id).exec();
        if (!node) {
            throw new common_1.NotFoundException(`OrganogramNode with id ${id} not found`);
        }
        return node;
    }
    async update(id, updateOrganogramDto) {
        const updatedNode = await this.organogramModel
            .findByIdAndUpdate(id, updateOrganogramDto, { new: true })
            .exec();
        if (!updatedNode) {
            throw new common_1.NotFoundException(`OrganogramNode with id ${id} not found`);
        }
        return updatedNode;
    }
    async remove(id) {
        const deletedNode = await this.organogramModel.findByIdAndDelete(id).exec();
        if (!deletedNode) {
            throw new common_1.NotFoundException(`OrganogramNode with id ${id} not found`);
        }
        return deletedNode;
    }
    async clearAll() {
        await this.organogramModel.deleteMany({}).exec();
    }
};
exports.OrganogramService = OrganogramService;
exports.OrganogramService = OrganogramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(organogram_schema_1.OrganogramNode.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganogramService);
//# sourceMappingURL=organogram.service.js.map