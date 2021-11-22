type DayPresetProps = Readonly<{
  id: number;
  date: Date;
  presetId: number;
}>;

export class DayPreset {
  constructor(readonly props: DayPresetProps) {}
}
