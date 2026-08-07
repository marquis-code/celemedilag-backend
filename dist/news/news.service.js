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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const news_schema_1 = require("./schemas/news.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let NewsService = class NewsService {
    newsModel;
    updatesGateway;
    constructor(newsModel, updatesGateway) {
        this.newsModel = newsModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createNewsDto) {
        const createdNews = new this.newsModel(createNewsDto);
        const saved = await createdNews.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'news', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.newsModel.find().sort({ createdAt: -1 }).lean().exec();
    }
    async findOne(id) {
        const news = await this.newsModel.findById(id).lean().exec();
        if (!news)
            throw new common_1.NotFoundException('News article not found');
        return news;
    }
    async update(id, updateNewsDto) {
        const news = await this.newsModel.findByIdAndUpdate(id, updateNewsDto, { new: true }).exec();
        if (!news)
            throw new common_1.NotFoundException('News article not found');
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'news', action: 'update', data: news });
        return news;
    }
    async remove(id) {
        const news = await this.newsModel.findByIdAndDelete(id).exec();
        if (!news)
            throw new common_1.NotFoundException('News article not found');
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'news', action: 'remove', id });
        return news;
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(news_schema_1.News.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], NewsService);
//# sourceMappingURL=news.service.js.map