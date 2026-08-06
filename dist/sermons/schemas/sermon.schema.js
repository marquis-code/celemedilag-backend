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
exports.SermonSchema = exports.Sermon = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Sermon = class Sermon {
    title;
    type;
    preacher;
    date;
    fileUrl;
};
exports.Sermon = Sermon;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sermon.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['Audio', 'Video', 'PDF'] }),
    __metadata("design:type", String)
], Sermon.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sermon.prototype, "preacher", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sermon.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sermon.prototype, "fileUrl", void 0);
exports.Sermon = Sermon = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Sermon);
exports.SermonSchema = mongoose_1.SchemaFactory.createForClass(Sermon);
//# sourceMappingURL=sermon.schema.js.map