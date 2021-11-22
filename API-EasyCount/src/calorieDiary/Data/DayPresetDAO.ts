import {
  DayPreset as DayPresetPrismaModel,
  PrismaClient,
} from ".prisma/client";
import { DayPreset } from "../Domain/DayPreset";

// Post Data Access Object
export class DayPresetDAO {
  constructor(private readonly prisma: PrismaClient) {}

  public async create(dayPreset: DayPreset): Promise<DayPreset> {
    const { date, presetId } = dayPreset.props;

    const savedDayPreset = await this.prisma.dayPreset.create({
      data: {
        date,
        presetId,
      },
    });

    return this.toDomain(savedDayPreset);
  }

  public async getById(id: number): Promise<DayPreset> {
    const dayPreset = await this.prisma.dayPreset.findUnique({
      where: { id },
    });

    if (!dayPreset) throw new Error(`DayPreset with id #${id} not found.`);

    return this.toDomain(dayPreset);
  }

  public async getByDate(date: Date): Promise<DayPreset | undefined> {
    const dayPreset = await this.prisma.dayPreset.findUnique({
      where: { date },
    });

    if (!dayPreset) return undefined;

    return this.toDomain(dayPreset);
  }

  public async update(date: Date, newDayPreset: DayPreset): Promise<DayPreset> {
    const updatedDayPreset = await this.prisma.dayPreset.update({
      where: { date },
      data: { ...newDayPreset.props },
    });

    return this.toDomain(updatedDayPreset);
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.dayPreset.delete({
      where: { id },
    });
  }

  private fromDomain(dayPreset: DayPreset): DayPresetPrismaModel {
    const { id, date, presetId } = dayPreset.props;

    return {
      id,
      date,
      presetId,
    };
  }

  private toDomain(model: DayPresetPrismaModel): DayPreset {
    const { id, date, presetId } = model;

    return new DayPreset({
      id,
      date,
      presetId,
    });
  }
}
