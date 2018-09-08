import { NEW_BASE, NEW_SAUCE, TOTAL_PRICE } from "../actions/pizzaAction";

const initialState = {
  pizza: {
    base: {},
    sauce: {},
    topping: [],
    total: 0.00
  }
  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_BASE:
      const stateArrayBase = {...state}
      stateArrayBase.pizza.base = {...action.base}
      return stateArrayBase 

    case NEW_SAUCE:
      const stateArraySauce = {...state}
      stateArraySauce.pizza.sauce = {...action.sauce} 
      return stateArraySauce 
    
    case TOTAL_PRICE:
    const stateArrayTotal = {...state}
    stateArrayTotal.pizza.total = action.total 
    return stateArrayTotal

    default:
        return state
  }
}