import { IsInt, IsString } from "class-validator";

export class CreatePresetDto {
  @IsString()
  name!: string;

  @IsInt()
  kcal!: number;

  @IsInt()
  carbs!: number;

  @IsInt()
  fat!: number;

  @IsInt()
  protein!: number;
}
