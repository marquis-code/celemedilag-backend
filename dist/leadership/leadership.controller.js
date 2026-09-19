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
exports.LeadershipController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const leadership_service_1 = require("./leadership.service");
const create_leader_dto_1 = require("./dto/create-leader.dto");
let LeadershipController = class LeadershipController {
    leadershipService;
    constructor(leadershipService) {
        this.leadershipService = leadershipService;
    }
    bulkUpload(files) {
        if (!files.csv || files.csv.length === 0) {
            return { success: false, message: 'No CSV file provided' };
        }
        return this.leadershipService.bulkUpload(files.csv[0], files.images || []);
    }
    create(createLeaderDto) {
        return this.leadershipService.create(createLeaderDto);
    }
    findAll() {
        return this.leadershipService.findAll();
    }
    findOne(id) {
        return this.leadershipService.findOne(id);
    }
    update(id, updateLeaderDto) {
        return this.leadershipService.update(id, updateLeaderDto);
    }
    remove(id) {
        return this.leadershipService.remove(id);
    }
};
exports.LeadershipController = LeadershipController;
__decorate([
    (0, common_1.Post)('bulk-upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'csv', maxCount: 1 },
        { name: 'images', maxCount: 50 }
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LeadershipController.prototype, "bulkUpload", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_leader_dto_1.CreateLeaderDto]),
    __metadata("design:returntype", void 0)
], LeadershipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadershipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeadershipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_leader_dto_1.CreateLeaderDto]),
    __metadata("design:returntype", void 0)
], LeadershipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeadershipController.prototype, "remove", null);
exports.LeadershipController = LeadershipController = __decorate([
    (0, common_1.Controller)('leadership'),
    __metadata("design:paramtypes", [leadership_service_1.LeadershipService])
], LeadershipController);
//# sourceMappingURL=leadership.controller.js.map