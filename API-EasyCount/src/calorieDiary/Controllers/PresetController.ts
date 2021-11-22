import {
  Body,
  Delete,
  Get,
  JsonController,
  OnUndefined,
  Param,
  Post,
  Put,
} from "routing-controllers";
import "reflect-metadata";

import { PresetService } from "../Services/PresetService";
import { CreatePresetDto } from "../DTOs/PresetDtos/CreatePresetDto";
import { ReadPresetDto } from "../DTOs/PresetDtos/ReadPresetDto";
import { UpdatePresetDto } from "../DTOs/PresetDtos/UpdatePresetDto";

@JsonController("/preset")
export class PresetController {
  presetService = new PresetService();

  @Post()
  async createMacroPreset(
    @Body({ validate: { whitelist: true } })
    macroPresetDto: CreatePresetDto
  ): Promise<ReadPresetDto> {
    return await this.presetService.create(macroPresetDto);
  }

  @Get()
  async getAllPreset(): Promise<ReadPresetDto[]> {
    return await this.presetService.getAll();
  }

  @Get("/:id")
  async getPresetById(@Param("id") presetId: number): Promise<ReadPresetDto> {
    return await this.presetService.getById(presetId);
  }

  @Put("/:id")
  async updatePreset(
    @Param("id") presetId: number,
    @Body({ validate: { whitelist: true } }) newPresetDto: UpdatePresetDto
  ): Promise<ReadPresetDto> {
    return await this.presetService.update(presetId, newPresetDto);
  }

  @Delete("/:id")
  @OnUndefined(204)
  delete(@Param("id") macroPresetId: number): Promise<void> {
    return this.presetService.delete(macroPresetId);
  }
}
