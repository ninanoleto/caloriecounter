type PresetProps = Readonly<{
  id: number;
  name: string;
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
}>;

export class Preset {
  constructor(readonly props: PresetProps) {}
}
