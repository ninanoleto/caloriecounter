import { PrismaContext } from "../Data/PrismaContext";

import { DayPresetDAO } from "../Data/DayPresetDAO";
import { DayPreset } from "../Domain/DayPreset";

import { DateUtils } from "../../utils/DateUtils";
import { CreateDayPresetDto } from "../DTOs/DayPresetDtos/CreateDayPresetDto";
import { ReadDayPresetDto } from "../DTOs/DayPresetDtos/ReadDayPresetDto";
import { UpdateDayPresetDto } from "../DTOs/DayPresetDtos/UpdateDayPresetDto";

export class DayPresetService {
  dayPresetDAO = new DayPresetDAO(PrismaContext.get());

  async create(dayPresetDto: CreateDayPresetDto): Promise<ReadDayPresetDto> {
    const date = DateUtils.strToDate(dayPresetDto.date);
    const newDayPreset = new DayPreset({ id: -1, ...dayPresetDto, date });

    const dayPresetModel = await this.dayPresetDAO.create(newDayPreset);

    const dayPreset: ReadDayPresetDto = { ...dayPresetModel.props };

    return dayPreset;
  }

  async getByDate(date: Date): Promise<ReadDayPresetDto> {
    const dayPresetModel = await this.dayPresetDAO.getByDate(date);

    if (!dayPresetModel) throw new Error(`Day not found.`);
    const dayPresetDto: ReadDayPresetDto = dayPresetModel.props;

    return dayPresetDto;
  }

  async getOrCreate(date: Date, presetId: number): Promise<ReadDayPresetDto> {
    const dayPresetModel = await this.dayPresetDAO.getByDate(date);

    if (dayPresetModel) {
      const dayPresetDto: ReadDayPresetDto = dayPresetModel.props;
      return dayPresetDto;
    }

    const dayPreset = new DayPreset({ id: -1, date, presetId });
    const getDayPresetModel = await this.dayPresetDAO.create(dayPreset);
    const newDayPreset: ReadDayPresetDto = { ...getDayPresetModel.props };

    return newDayPreset;
  }

  async update(
    dayPresetDate: Date,
    newDayPresetDto: UpdateDayPresetDto
  ): Promise<ReadDayPresetDto | undefined> {
    const oldDayPreset = await this.dayPresetDAO.getByDate(dayPresetDate);

    if (oldDayPreset) {
      const newDayPreset = new DayPreset({
        ...oldDayPreset.props,
        ...newDayPresetDto,
      });

      const updatedDayPresetModel = await this.dayPresetDAO.update(
        dayPresetDate,
        newDayPreset
      );

      const updatedDayPreset: ReadDayPresetDto = {
        ...updatedDayPresetModel.props,
      };

      return updatedDayPreset;
    }
  }

  async delete(dayPresetId: number): Promise<void> {
    await this.dayPresetDAO.delete(dayPresetId);
  }
}
