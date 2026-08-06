import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getAll() {
    return this.settingsService.getAllSettings();
  }

  @Get(':key')
  getOne(@Param('key') key: string) {
    return this.settingsService.getSetting(key);
  }

  @Put(':key')
  update(@Param('key') key: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.updateSetting(key, updateSettingDto);
  }
}
