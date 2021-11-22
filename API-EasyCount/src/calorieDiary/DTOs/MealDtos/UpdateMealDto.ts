import { IsString } from "class-validator";

export class UpdateMealDto {
  @IsString()
  name!: string;
}
