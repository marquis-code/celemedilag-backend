import { SettingsService } from './settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    getAll(): Promise<import("./schemas/setting.schema").Setting[]>;
    getOne(key: string): Promise<import("./schemas/setting.schema").Setting>;
    update(key: string, updateSettingDto: UpdateSettingDto): Promise<import("./schemas/setting.schema").Setting>;
}
