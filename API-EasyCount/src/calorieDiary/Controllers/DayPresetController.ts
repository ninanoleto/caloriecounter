import {
  JsonController,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  OnUndefined,
} from "routing-controllers";
import "reflect-metadata";

import { DayPresetService } from "../Services/DayPresetService";
import { CreateDayPresetDto } from "../DTOs/DayPresetDtos/CreateDayPresetDto";
import { ReadDayPresetDto } from "../DTOs/DayPresetDtos/ReadDayPresetDto";
import { PresetService } from "../Services/PresetService";
import { DateUtils } from "../../utils/DateUtils";
import { UpdateDayPresetDto } from "../DTOs/DayPresetDtos/UpdateDayPresetDto";

@JsonController("/dayPreset")
export class DayPresetController {
  dayPresetService = new DayPresetService();
  presetService = new PresetService();

  @Post()
  async createDayPreset(
    @Body({ validate: { whitelist: true } }) dayDto: CreateDayPresetDto
  ): Promise<ReadDayPresetDto> {
    return await this.dayPresetService.create(dayDto);
  }

  @Get("/:date")
  async getDayPresetByDate(
    @Param("date") datePresetDate: string
  ): Promise<ReadDayPresetDto> {
    const date = DateUtils.strToDate(datePresetDate);
    return await this.dayPresetService.getByDate(date);
  }

  @Put("/:date")
  async updateDayPreset(
    @Param("date") dayPresetDate: string,
    @Body({ validate: { whitelist: true } }) newDayPresetDto: UpdateDayPresetDto
  ): Promise<ReadDayPresetDto> {
    const date = DateUtils.strToDate(dayPresetDate);
    const updatedDayPreset = await this.dayPresetService.update(
      date,
      newDayPresetDto
    );

    if (!updatedDayPreset) throw new Error("Not found");

    return updatedDayPreset;
  }

  @Delete("/:id")
  @OnUndefined(204)
  deleteDayPreset(@Param("id") dayPresetId: number): Promise<void> {
    return this.dayPresetService.delete(dayPresetId);
  }
}
