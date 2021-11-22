import { PresetDAO } from "../Data/PresetDAO";
import { PrismaContext } from "../Data/PrismaContext";
import { Preset } from "../Domain/Preset";
import { CreatePresetDto } from "../DTOs/PresetDtos/CreatePresetDto";
import { ReadPresetDto } from "../DTOs/PresetDtos/ReadPresetDto";
import { UpdatePresetDto } from "../DTOs/PresetDtos/UpdatePresetDto";

export class PresetService {
  presetDAO = new PresetDAO(PrismaContext.get());

  public async create(presetDto: CreatePresetDto): Promise<ReadPresetDto> {
    const { name, kcal, carbs, fat, protein } = presetDto;
    const presetModel = new Preset({
      id: -1,
      name,
      kcal,
      carbs,
      fat,
      protein,
    });

    const newPresetModel = await this.presetDAO.create(presetModel);
    const preset: ReadPresetDto = newPresetModel.props;

    return preset;
  }

  public async getAll(): Promise<ReadPresetDto[]> {
    const allPresetModels = await this.presetDAO.getAll();

    return [...allPresetModels.map((preset) => preset.props)];
  }

  public async getById(presetId: number): Promise<ReadPresetDto> {
    const presetModel = await this.presetDAO.getById(presetId);
    const preset: ReadPresetDto = presetModel.props;

    return preset;
  }

  public async update(
    presetId: number,
    newPresetDto: UpdatePresetDto
  ): Promise<ReadPresetDto> {
    const oldPreset = await this.presetDAO.getById(presetId);
    const newPreset = new Preset({ ...oldPreset.props, ...newPresetDto });

    const updatedPresetModel = await this.presetDAO.update(presetId, newPreset);
    const updatedPreset: ReadPresetDto = updatedPresetModel.props;

    return updatedPreset;
  }

  public async delete(presetId: number): Promise<void> {
    await this.presetDAO.delete(presetId);
  }
}
