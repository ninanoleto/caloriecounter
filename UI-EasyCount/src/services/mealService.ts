import axios from "axios";
import { DateUtils } from "../components/shared/DateUtils.shared";
import { API_URL } from "../variables";

const create = async (name: string, date: string): Promise<MealDto> => {
  const res = await axios.post(`${API_URL}/meal`, { name, date });

  return res.data as MealDto;
};

const get = async (id: number) => {
  const res = await axios.get(`${API_URL}/meal/${id}`);

  return res.data as MealDto;
};

// const getByDate = async (date: Date) => {
//   const dateStr = DateUtils.parseDate(date);
//   const res = await fetch(`${API_URL}/meal/date/${dateStr}`);

//   return res.json;
// };

const updateName = async (id: number, name: string): Promise<MealDto> => {
  const res = await axios.put(`${API_URL}/meal/${id}`, { name });

  return res.data as MealDto;
};

const remove = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/meal/${id}`);
};

export const mealService = {
  create,
  get,
  updateName,
  remove,
};

export type MealDto = {
  id: number;
  name: string;
  date: Date;
};
