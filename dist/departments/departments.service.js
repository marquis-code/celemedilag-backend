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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const department_schema_1 = require("./schemas/department.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let DepartmentsService = class DepartmentsService {
    departmentModel;
    updatesGateway;
    constructor(departmentModel, updatesGateway) {
        this.departmentModel = departmentModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createDepartmentDto) {
        const newDepartment = new this.departmentModel(createDepartmentDto);
        const saved = await newDepartment.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.departmentModel.find().sort({ displayOrder: 1, createdAt: -1 }).lean().exec();
    }
    async findOne(id) {
        const department = await this.departmentModel.findById(id).lean().exec();
        if (!department) {
            throw new common_1.NotFoundException(`Department #${id} not found`);
        }
        return department;
    }
    async update(id, updateDepartmentDto) {
        const department = await this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, { new: true }).exec();
        if (!department)
            throw new common_1.NotFoundException(`Department #${id} not found`);
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'update', data: department });
        return department;
    }
    async reorder(updates) {
        const bulkOps = updates.map(update => ({
            updateOne: {
                filter: { _id: update.id },
                update: { $set: { category: update.category, displayOrder: update.displayOrder } }
            }
        }));
        if (bulkOps.length > 0) {
            await this.departmentModel.bulkWrite(bulkOps);
            this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'reorder' });
        }
        return { success: true };
    }
    async remove(id) {
        const deletedDepartment = await this.departmentModel.findByIdAndDelete(id).exec();
        if (!deletedDepartment) {
            throw new common_1.NotFoundException(`Department #${id} not found`);
        }
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'departments', action: 'remove', id });
        return deletedDepartment;
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(department_schema_1.Department.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map