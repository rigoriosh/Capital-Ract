import { tipos } from "../types/tipos"

export const editDrinks = (idDrink, drink) => (
    {
        type: tipos.editDrink,
        payload: {idDrink, drink}
    }
);
export const selectedDrink = (idDrink) => (
    {
        type: tipos.selectedDrink,
        payload: idDrink
    }
);
export const deleteDrink = (idDrink) => (
    {
        type: tipos.deleteDrink,
        payload: {idDrink}
    }
);
export const addDrink = (drink) => (
    {
        type: tipos.addDrink,
        payload: drink
    }
);