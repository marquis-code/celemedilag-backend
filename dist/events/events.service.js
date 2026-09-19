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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("./schemas/event.schema");
const updates_gateway_1 = require("../websockets/updates.gateway");
let EventsService = class EventsService {
    eventModel;
    updatesGateway;
    constructor(eventModel, updatesGateway) {
        this.eventModel = eventModel;
        this.updatesGateway = updatesGateway;
    }
    async create(createEventDto) {
        const createdEvent = new this.eventModel(createEventDto);
        const saved = await createdEvent.save();
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'events', action: 'create', data: saved });
        return saved;
    }
    async findAll() {
        return this.eventModel.find().sort({ date: 1 }).lean().exec();
    }
    async findOne(id) {
        const event = await this.eventModel.findById(id).lean().exec();
        if (!event)
            throw new common_1.NotFoundException('Event not found');
        return event;
    }
    async update(id, updateEventDto) {
        const event = await this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true }).exec();
        if (!event)
            throw new common_1.NotFoundException('Event not found');
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'events', action: 'update', data: event });
        return event;
    }
    async remove(id) {
        const event = await this.eventModel.findByIdAndDelete(id).exec();
        if (!event)
            throw new common_1.NotFoundException('Event not found');
        this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'events', action: 'remove', id });
        return event;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        updates_gateway_1.UpdatesGateway])
], EventsService);
//# sourceMappingURL=events.service.js.map