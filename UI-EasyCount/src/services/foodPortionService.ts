import axios from "axios";
import { API_URL } from "../variables";

const createMany = async (foodPortions: NewFoodPortionDto[]) => {
  await axios.post(`${API_URL}/foodPortion`, { foodPortions });
};

const update = async (
  id: number,
  inputValue: number
): Promise<FoodPortionDto> => {
  const res = await axios.put(`${API_URL}/foodPortion/${id}`, {
    quantityInGrams: inputValue,
  });

  return res.data as FoodPortionDto;
};

const remove = async (id: number) => {
  await axios.delete(`${API_URL}/foodPortion/${id}`);
};

const removeByMealId = async (id: number) => {
  await axios.delete(`${API_URL}/foodPortion/meal/${id}`);
};

export const foodPortionService = {
  createMany,
  update,
  remove,
  removeByMealId,
};

export type FoodPortionDto = {
  id: number;
  quantityInGrams: number;
  mealId: number;
  foodId: number;
};

export type NewFoodPortionDto = {
  quantityInGrams: number;
  mealId: number;
  foodId: number;
};
