import { Preset as presetPrismaModel, PrismaClient } from ".prisma/client";
import { Preset } from "../Domain/Preset";

export class PresetDAO {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(preset: Preset): Promise<Preset> {
    const { name, kcal, protein, fat, carbs } = preset.props;

    const presetModel = await this.prisma.preset.create({
      data: {
        name,
        kcal,
        carbs,
        fat,
        protein,
      },
    });

    return this.toDomain(presetModel);
  }

  public async getAll(): Promise<Preset[]> {
    const allPreset = await this.prisma.preset.findMany();

    return allPreset.map((preset) => this.toDomain(preset));
  }

  public async getById(id: number): Promise<Preset> {
    const presetModel = await this.prisma.preset.findUnique({
      where: { id },
    });

    if (!presetModel) throw new Error(`Preset with id #${id} not found`);

    const preset = this.toDomain(presetModel);

    return preset;
  }

  public async update(id: number, newPreset: Preset): Promise<Preset> {
    const updatedPresetModel = await this.prisma.preset.update({
      where: { id },
      data: { ...newPreset.props },
    });

    const updatedPreset = this.toDomain(updatedPresetModel);

    return updatedPreset;
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.dayPreset.deleteMany({
      where: { presetId: id },
    });

    await this.prisma.preset.delete({
      where: { id },
    });
  }

  public toDomain(model: presetPrismaModel): Preset {
    const { id, name, kcal, carbs, fat, protein } = model;
    return new Preset({
      id,
      name,
      kcal,
      carbs,
      fat,
      protein,
    });
  }
}
