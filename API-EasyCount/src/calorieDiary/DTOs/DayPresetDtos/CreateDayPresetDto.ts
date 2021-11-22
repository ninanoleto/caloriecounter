// DTO = Data Transfer Object
import { IsInt } from "class-validator";
import { IsOnlyDate } from "../../../utils/ValidateDate";

export class CreateDayPresetDto {
  @IsOnlyDate()
  date!: string;

  @IsInt()
  presetId!: number;
}
