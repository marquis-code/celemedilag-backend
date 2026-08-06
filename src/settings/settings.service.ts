import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting, SettingDocument } from './schemas/setting.schema';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting.name) private settingModel: Model<SettingDocument>,
    private updatesGateway: UpdatesGateway,
  ) {}

  async getSetting(key: string): Promise<Setting> {
    const setting = await this.settingModel.findOne({ key }).exec();
    if (!setting) {
      throw new NotFoundException(`Setting with key ${key} not found`);
    }
    return setting;
  }

  async getAllSettings(): Promise<Setting[]> {
    return this.settingModel.find().exec();
  }

  async updateSetting(key: string, updateSettingDto: UpdateSettingDto): Promise<Setting> {
    const setting = await this.settingModel.findOneAndUpdate(
      { key },
      { value: updateSettingDto.value },
      { new: true, upsert: true }
    ).exec();
    
    // Broadcast the update via WebSocket
    this.updatesGateway.broadcastUpdate('contentUpdated', { type: 'setting', key, data: setting });
    
    return setting;
  }
}
