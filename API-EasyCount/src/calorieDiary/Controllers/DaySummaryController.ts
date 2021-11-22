import { Get, JsonController, Params, QueryParam } from "routing-controllers";
import "reflect-metadata"; // ?
import { DateUtils } from "../../utils/DateUtils";

import { DayPresetService } from "../Services/DayPresetService";
import { PresetService } from "../Services/PresetService";
import { ReadDaySummaryDto } from "../DTOs/DaySummaryDtos/ReadDaySummaryDto";
import { DaySummaryService } from "../Services/DaySummaryService";
import { MealService } from "../Services/MealService";

@JsonController("/foodDiary")
export class DaySummaryController {
  daySummaryService = new DaySummaryService();
  dayPresetService = new DayPresetService();
  presetService = new PresetService();
  mealService = new MealService();

  @Get()
  async getDaySummary(
    @QueryParam("date") dateId: string
  ): Promise<ReadDaySummaryDto> {
    const date = DateUtils.strToDate(dateId);

    const presetId = await this.daySummaryService.getLastPresetId();
    const dayPreset = await this.dayPresetService.getOrCreate(date, presetId);
    const preset = await this.presetService.getById(dayPreset.presetId);
    const totalMacros = await this.daySummaryService.getTotalMacros(date);
    const macrosLeft = await this.daySummaryService.getMacrosLeft(
      date,
      preset.id
    );
    const meals = await this.daySummaryService.getMealsOrCreateDefault(date);

    return { date, preset, totalMacros, macrosLeft, meals };
  }
}
