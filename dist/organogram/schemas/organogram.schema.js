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
exports.OrganogramNodeSchema = exports.OrganogramNode = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrganogramNode = class OrganogramNode {
    title;
    order;
    parentId;
    isGroup;
};
exports.OrganogramNode = OrganogramNode;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], OrganogramNode.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], OrganogramNode.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'OrganogramNode', default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], OrganogramNode.prototype, "parentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], OrganogramNode.prototype, "isGroup", void 0);
exports.OrganogramNode = OrganogramNode = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OrganogramNode);
exports.OrganogramNodeSchema = mongoose_1.SchemaFactory.createForClass(OrganogramNode);
//# sourceMappingURL=organogram.schema.js.map