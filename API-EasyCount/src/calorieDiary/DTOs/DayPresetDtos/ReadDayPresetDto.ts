export type ReadDayPresetDto = {
  id: number;
  date: Date;
  presetId: number;
};

export type MacrosDto = {
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
};

export type MacrosPctDto = {
  fat: number;
  carbs: number;
  protein: number;
};
