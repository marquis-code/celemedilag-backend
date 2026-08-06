import { Model } from 'mongoose';
import { Setting, SettingDocument } from './schemas/setting.schema';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { UpdatesGateway } from '../websockets/updates.gateway';
export declare class SettingsService {
    private settingModel;
    private updatesGateway;
    constructor(settingModel: Model<SettingDocument>, updatesGateway: UpdatesGateway);
    getSetting(key: string): Promise<Setting>;
    getAllSettings(): Promise<Setting[]>;
    updateSetting(key: string, updateSettingDto: UpdateSettingDto): Promise<Setting>;
}
