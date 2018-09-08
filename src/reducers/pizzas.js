import { PIZZA_CREATOR } from "../actions/pizzaAction";

const initialState = {
  pizza: {
    ingredients : []
  }
  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PIZZA_CREATOR:
      const stateArray = {...state}
      stateArray.pizza.ingredients.push(action.ingredient) 
      return stateArray

    default:
        return state
  }
}