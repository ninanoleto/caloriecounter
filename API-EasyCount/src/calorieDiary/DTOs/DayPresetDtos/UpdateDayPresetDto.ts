import { IsInt, IsOptional } from "class-validator";

export class UpdateDayPresetDto {
  @IsInt()
  @IsOptional()
  presetId!: number;
}
