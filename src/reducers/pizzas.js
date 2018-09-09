import { NEW_BASE, NEW_SAUCE, TOTAL_PRICE, ADD_TOPPING, REMOVE_TOPPING } from "../actions/pizzaAction";

const initialState = {
  pizza: {
    base: {},
    sauce: {},
    topping: {},
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
    
    case ADD_TOPPING:
      const stateArrayAddTopping = {...state}
      console.log(action.topping)
      //stateArrayAddTopping.pizza.topping.push(action.topping) 
      stateArrayAddTopping.pizza.topping += action.topping 
      return stateArrayAddTopping

      case REMOVE_TOPPING:
      const stateArrayRemoveTopping = {...state}
      console.log(stateArrayRemoveTopping.pizza.topping)
      //stateArrayRemoveTopping.pizza.topping.map(top => console.log(top.id))
      stateArrayRemoveTopping.pizza.topping.filter(top =>  top !== action.topping) 
      //stateArrayRemoveTopping.pizza.topping.filter(top =>  top.id !== action.topping.id) 
      //console.log(stateArrayRemoveTopping)
      //stateArrayRemoveTopping.pizza.topping.filter(top =.> action.topping.id === top.id) 
      return stateArrayRemoveTopping 

    case TOTAL_PRICE:
      const stateArrayTotal = {...state}
      stateArrayTotal.pizza.total = action.total 
      return stateArrayTotal

    default:
        return state
  }
}