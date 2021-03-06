import { tipos } from "../types/tipos"

export const editFood = (idFood, food) => (
    {
        type: tipos.editFood,
        payload: {idFood, food}
    }
);
export const selectedFood = (idFood) => (
    {
        type: tipos.selectedFood,
        payload: idFood
    }
);
export const deleteFood = (idFood) => (
    {
        type: tipos.deleteFood,
        payload: {idFood}
    }
);
export const addFood = (food) => (
    {
        type: tipos.addFood,
        payload: food
    }
);