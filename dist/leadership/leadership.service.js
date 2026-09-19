"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadershipService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const leader_schema_1 = require("./schemas/leader.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
const cloudinary_service_1 = require("../upload/cloudinary.service");
const csv_parser_1 = __importDefault(require("csv-parser"));
const streamifier = __importStar(require("streamifier"));
let LeadershipService = class LeadershipService {
    leaderModel;
    updatesGateway;
    cloudinaryService;
    constructor(leaderModel, updatesGateway, cloudinaryService) {
        this.leaderModel = leaderModel;
        this.updatesGateway = updatesGateway;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createLeaderDto) {
        const newLeader = new this.leaderModel(createLeaderDto);
        const saved = await newLeader.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.leaderModel.find().sort({ order: 1, createdAt: -1 }).lean().exec();
    }
    async findOne(id) {
        const leader = await this.leaderModel.findById(id).lean().exec();
        if (!leader) {
            throw new common_1.NotFoundException(`Leader #${id} not found`);
        }
        return leader;
    }
    async update(id, updateLeaderDto) {
        const leader = await this.leaderModel.findByIdAndUpdate(id, updateLeaderDto, { new: true }).exec();
        if (!leader)
            throw new common_1.NotFoundException(`Leader #${id} not found`);
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'update', data: leader });
        return leader;
    }
    async remove(id) {
        const deletedLeader = await this.leaderModel.findByIdAndDelete(id).exec();
        if (!deletedLeader) {
            throw new common_1.NotFoundException(`Leader #${id} not found`);
        }
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'remove', id });
        return deletedLeader;
    }
    async bulkUpload(csvFile, images) {
        const results = [];
        const imageMap = new Map();
        if (images && images.length > 0) {
            images.forEach(img => imageMap.set(img.originalname, img));
        }
        return new Promise((resolve, reject) => {
            streamifier.createReadStream(csvFile.buffer)
                .pipe((0, csv_parser_1.default)())
                .on('data', (data) => results.push(data))
                .on('end', async () => {
                let success = 0;
                let failed = 0;
                for (const row of results) {
                    try {
                        const getVal = (r, k) => {
                            const found = Object.keys(r).find(key => key.trim().toLowerCase() === k.toLowerCase());
                            return found ? r[found] : undefined;
                        };
                        let avatarUrl = '';
                        const avatarFilename = getVal(row, 'avatar') || getVal(row, 'image') || getVal(row, 'photo');
                        if (avatarFilename && imageMap.has(avatarFilename)) {
                            const imgFile = imageMap.get(avatarFilename);
                            if (imgFile) {
                                const uploadResult = await this.cloudinaryService.uploadFile(imgFile);
                                avatarUrl = uploadResult.secure_url;
                            }
                        }
                        else if (avatarFilename && avatarFilename.startsWith('http')) {
                            avatarUrl = avatarFilename;
                        }
                        const rawIsPastExco = String(getVal(row, 'isPastExco') || '').trim().toLowerCase();
                        const isPastExco = rawIsPastExco === 'true' || rawIsPastExco === '1' || rawIsPastExco === 'yes';
                        const newLeader = new this.leaderModel({
                            name: getVal(row, 'name'),
                            position: getVal(row, 'position'),
                            tenure: getVal(row, 'tenure'),
                            session: getVal(row, 'session'),
                            isPastExco,
                            avatar: avatarUrl,
                            bio: getVal(row, 'bio'),
                            department: getVal(row, 'department'),
                            email: getVal(row, 'email'),
                            phone: getVal(row, 'phone'),
                            order: parseInt(getVal(row, 'order')) || 99,
                            courseOfStudy: getVal(row, 'courseOfStudy') || getVal(row, 'course of study'),
                            socialLinks: {
                                twitter: getVal(row, 'twitter') || '',
                                linkedin: getVal(row, 'linkedin') || '',
                                instagram: getVal(row, 'instagram') || '',
                                facebook: getVal(row, 'facebook') || '',
                                tiktok: getVal(row, 'tiktok') || '',
                                snapchat: getVal(row, 'snapchat') || ''
                            }
                        });
                        await newLeader.save();
                        success++;
                    }
                    catch (error) {
                        console.error('Failed to insert row:', row, error);
                        failed++;
                    }
                }
                this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'leadership', action: 'bulkUpload' });
                resolve({ success, failed });
            })
                .on('error', (error) => {
                reject(error);
            });
        });
    }
};
exports.LeadershipService = LeadershipService;
exports.LeadershipService = LeadershipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(leader_schema_1.Leader.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway,
        cloudinary_service_1.CloudinaryService])
], LeadershipService);
//# sourceMappingURL=leadership.service.js.map