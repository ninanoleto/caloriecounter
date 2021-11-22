import axios from "axios";
import { API_URL } from "../variables";

export const create = async (newFood: NewFoodDto) => {
  const res = await axios.post(`${API_URL}/food`, {
    ...newFood,
  });

  return res.data as FoodDto;
};

const getAll = async (): Promise<FoodDto[]> => {
  const res = await axios.get(`${API_URL}/food`);

  return res.data as FoodDto[];
};

const getById = async (id: number): Promise<FoodDto> => {
  const res = await axios.get(`${API_URL}/food/${id}`);

  return res.data as FoodDto;
};

const getByName = async (name: string): Promise<FoodDto[]> => {
  const res = await axios.get(`${API_URL}/foodsearch`, { params: { name } });

  return res.data as FoodDto[];
};

const remove = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/food/${id}`);
};

export const foodService = {
  create,
  getAll,
  getById,
  getByName,
  remove,
};

export type FoodDto = {
  id: number;
  name: string;
  portion: number;
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
};

export type NewFoodDto = {
  name: string;
  portion: number;
  kcal: number;
  carbs: number;
  fat: number;
  protein: number;
};
