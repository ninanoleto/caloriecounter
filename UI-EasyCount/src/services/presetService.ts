import axios from "axios";
import { API_URL } from "../variables";

const create = async (preset: NewPresetDto): Promise<PresetDto> => {
  const res = await axios.post(`${API_URL}/preset`, {
    ...preset,
  });

  return res.data as PresetDto;
};

const getAll = async (): Promise<PresetDto[]> => {
  const res = await axios.get(`${API_URL}/preset`);

  return res.data as PresetDto[];
};

const getById = async (id: number): Promise<PresetDto> => {
  const res = await axios.get(`${API_URL}/preset/${id}`);

  return res.data as PresetDto;
};

const update = async (
  id: number,
  newPreset: NewPresetDto
): Promise<PresetDto> => {
  const res = await axios.put(`${API_URL}/preset/${id}`, {
    ...newPreset,
  });

  return res.data as PresetDto;
};

const remove = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/preset/${id}`);
};

export const presetService = {
  create,
  getAll,
  getById,
  update,
  remove,
};

export type PresetDto = {
  id: number;
  name: string;
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
};

export type NewPresetDto = {
  name: string;
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
};
