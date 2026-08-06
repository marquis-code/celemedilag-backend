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
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const album_schema_1 = require("./schemas/album.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let GalleryService = class GalleryService {
    albumModel;
    updatesGateway;
    constructor(albumModel, updatesGateway) {
        this.albumModel = albumModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createAlbumDto) {
        const newAlbum = new this.albumModel(createAlbumDto);
        const saved = await newAlbum.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'gallery', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.albumModel.find().sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        const album = await this.albumModel.findById(id).exec();
        if (!album) {
            throw new common_1.NotFoundException(`Album #${id} not found`);
        }
        return album;
    }
    async remove(id) {
        const deletedAlbum = await this.albumModel.findByIdAndDelete(id).exec();
        if (!deletedAlbum) {
            throw new common_1.NotFoundException(`Album #${id} not found`);
        }
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'gallery', action: 'remove', id });
        return deletedAlbum;
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(album_schema_1.Album.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map