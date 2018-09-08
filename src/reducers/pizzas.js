import { NEW_BASE, NEW_SAUCE } from "../actions/pizzaAction";

const initialState = {
  pizza: {
    base: {},
    sauce: {},
    topping: []
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

    default:
        return state
  }
}