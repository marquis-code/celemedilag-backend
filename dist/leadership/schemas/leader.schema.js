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
exports.LeaderSchema = exports.Leader = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Leader = class Leader {
    name;
    position;
    tenure;
    isPastExco;
    session;
    avatar;
    bio;
    department;
    email;
    phone;
    order;
    courseOfStudy;
    socialLinks;
};
exports.Leader = Leader;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leader.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Leader.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "tenure", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Leader.prototype, "isPastExco", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "session", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "bio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 99 }),
    __metadata("design:type", Number)
], Leader.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Leader.prototype, "courseOfStudy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: { twitter: String, linkedin: String, instagram: String, facebook: String, tiktok: String, snapchat: String } }),
    __metadata("design:type", Object)
], Leader.prototype, "socialLinks", void 0);
exports.Leader = Leader = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Leader);
exports.LeaderSchema = mongoose_1.SchemaFactory.createForClass(Leader);
//# sourceMappingURL=leader.schema.js.map