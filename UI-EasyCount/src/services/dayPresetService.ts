import axios from "axios";
import { DateUtils } from "../components/shared/DateUtils.shared";
import { API_URL } from "../variables";

const get = async (date: Date): Promise<DayPresetDto> => {
  const dateStr = DateUtils.parseDate(date);
  const res = await axios.get(`${API_URL}/dayPreset/${dateStr}`);

  return res.data as DayPresetDto;
};

const update = async (
  date: Date,
  inputValue: number
): Promise<DayPresetDto> => {
  const dateStr = DateUtils.parseDate(date);
  const res = await axios.put(`${API_URL}/dayPreset/${dateStr}`, {
    presetId: inputValue,
  });

  return res.data as DayPresetDto;
};

export const dayPresetService = {
  get,
  update,
};

export type DayPresetDto = {
  id: number;
  date: Date;
  presetId: number;
};
