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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const document_schema_1 = require("./schemas/document.schema");
let DocumentsService = class DocumentsService {
    documentModel;
    constructor(documentModel) {
        this.documentModel = documentModel;
    }
    async create(createDocumentDto) {
        const createdDocument = new this.documentModel(createDocumentDto);
        return createdDocument.save();
    }
    async findAll(category) {
        if (category) {
            return this.documentModel.find({ category }).sort({ createdAt: -1 }).exec();
        }
        return this.documentModel.find().sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        const document = await this.documentModel.findById(id).exec();
        if (!document) {
            throw new common_1.NotFoundException(`Document with ID ${id} not found`);
        }
        return document;
    }
    async remove(id) {
        const deletedDocument = await this.documentModel.findByIdAndDelete(id).exec();
        if (!deletedDocument) {
            throw new common_1.NotFoundException(`Document with ID ${id} not found`);
        }
        return deletedDocument;
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(document_schema_1.AppDocument.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map