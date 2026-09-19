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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSchema = exports.AppDocument = exports.DocumentCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var DocumentCategory;
(function (DocumentCategory) {
    DocumentCategory["LEGACY_AND_CAPITAL_PROJECTS"] = "Legacy & Capital Projects";
    DocumentCategory["MINISTRY_OPERATIONS"] = "Ministry Operations (Ministry & Welfare Budget)";
    DocumentCategory["MISSION_OUTREACHES"] = "Mission Outreaches (Mission, Outreach & Emergency Fund)";
})(DocumentCategory || (exports.DocumentCategory = DocumentCategory = {}));
let AppDocument = class AppDocument {
    title;
    category;
    pdfUrl;
    publicId;
};
exports.AppDocument = AppDocument;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AppDocument.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: DocumentCategory }),
    __metadata("design:type", String)
], AppDocument.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AppDocument.prototype, "pdfUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AppDocument.prototype, "publicId", void 0);
exports.AppDocument = AppDocument = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AppDocument);
exports.DocumentSchema = mongoose_1.SchemaFactory.createForClass(AppDocument);
//# sourceMappingURL=document.schema.js.map