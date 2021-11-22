import { IsString } from "class-validator";
import { IsOnlyDate } from "../../../utils/ValidateDate";

export class CreateMealDto {
  @IsString()
  name!: string;

  @IsOnlyDate()
  date!: string;
}
