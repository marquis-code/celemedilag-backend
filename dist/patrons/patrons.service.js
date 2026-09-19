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
exports.PatronsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patron_schema_1 = require("./schemas/patron.schema");
let PatronsService = class PatronsService {
    patronModel;
    constructor(patronModel) {
        this.patronModel = patronModel;
    }
    async create(createPatronDto) {
        const createdPatron = new this.patronModel(createPatronDto);
        return createdPatron.save();
    }
    async findAll() {
        return this.patronModel.find().sort({ order: 1, createdAt: -1 }).exec();
    }
    async findOne(id) {
        const patron = await this.patronModel.findById(id).exec();
        if (!patron) {
            throw new common_1.NotFoundException(`Patron with ID ${id} not found`);
        }
        return patron;
    }
    async update(id, updatePatronDto) {
        const updatedPatron = await this.patronModel
            .findByIdAndUpdate(id, updatePatronDto, { new: true })
            .exec();
        if (!updatedPatron) {
            throw new common_1.NotFoundException(`Patron with ID ${id} not found`);
        }
        return updatedPatron;
    }
    async remove(id) {
        const deletedPatron = await this.patronModel.findByIdAndDelete(id).exec();
        if (!deletedPatron) {
            throw new common_1.NotFoundException(`Patron with ID ${id} not found`);
        }
        return deletedPatron;
    }
};
exports.PatronsService = PatronsService;
exports.PatronsService = PatronsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(patron_schema_1.Patron.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PatronsService);
//# sourceMappingURL=patrons.service.js.map