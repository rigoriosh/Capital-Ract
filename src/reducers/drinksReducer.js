import { tipos } from "../types/tipos";

const initialState =
    {
        drinks:[
            {
                idDrink: 1,
                nameDrink: 'Aguila',
                priceDrink: 3500,
                descriptionDrink: '350mm',
                categoryDrink: 'Cerveza',
                quantityDrink: 50,                
                color:'',
                imagen: ''
            },
            {
                idDrink: 2,
                nameDrink: 'Poker',
                priceDrink: 3500,
                descriptionDrink: '350mm',
                categoryDrink: 'Cerveza',
                quantityDrink: 50,                
                color:'',
                imagen: ''
            }
        ],
        idDrinkSelected: ''

    }

export const drinksReducer = (state = initialState, action) => {
    console.log(action);
    let i = 0;
    switch (action.type) {
        case tipos.addDrink:                          
            state.drinks.push(action.payload);
            return state;
        case tipos.editDrink:                          
            state.idDrinkSelected = '';            
            i = state.drinks.findIndex(e => e.idDrink === action.payload.idDrink)
            console.log(i)
            state.drinks[i] = action.payload.drink;
            return state;
        case tipos.selectedDrink:                          
            state.idDrinkSelected = action.payload;
            return state;
        case tipos.deleteDrink:                          
        //state.idDrinkSelected = '';            
        i = state.drinks.findIndex(e => e.idDrink === action.payload.idDrink)
        console.log(i)
        if (i > -1) {
            state.drinks.splice(i, 1);
          }        
        return state;
        default:
            return state;
    }
}
