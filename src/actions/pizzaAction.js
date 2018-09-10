export const NEW_BASE = 'NEW_BASE'
export const NEW_SAUCE = 'NEW_SAUCE'
export const ADD_TOPPING = 'ADD_TOPPING'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'
export const TOTAL_PRICE = 'TOTAL_PRICE'

//Actions Creators

const newBase = base => ({
  type: NEW_BASE,
  base
})

const newSauce = sauce => ({
  type: NEW_SAUCE,
  sauce
})

const addTopping = topping => ({
  type: ADD_TOPPING,
  topping
})

const removeTopping = topping => ({
  type: REMOVE_TOPPING,
  topping
})

const updatePizzaPrice = total => ({
  type: TOTAL_PRICE,
  total
})

//Dispatch Actions

export const createPizzaAddTopping = (topping) => dispatch => {
  dispatch(addTopping(topping))
}

export const createPizzaRemoveTopping = (topping) => dispatch => {
  dispatch(removeTopping(topping))
}
export const updatePrice = (pizza) => (dispatch) => {
  
  let toppingTotalPrice = 0

  if(!pizza.base.price) {
    pizza.base.price = 0
  }
   if(!pizza.sauce.price){
    pizza.sauce.price = 0
  }
  
    const mapToppings = pizza.topping.map(top => top.price) 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    toppingTotalPrice = mapToppings.reduce(reducer,0)

    const total = pizza.base.price + pizza.sauce.price + toppingTotalPrice
    dispatch(updatePizzaPrice(Number(total).toFixed(2)))
}

export const updateDeliveryOn = (pizza) => (dispatch) => {

  const totalWithDeliveryOn = pizza.total + (pizza.total * 0.1)

  dispatch(updatePizzaPrice(Number(totalWithDeliveryOn).toFixed(2)))
}

export const updateDeliveryOff = (pizza) => (dispatch) => {

  const totalWithDeliveryOff = pizza.total - (pizza.total * 0.1)

  dispatch(updatePizzaPrice(Number(totalWithDeliveryOff).toFixed(2)))
}

export const createPizzaBase = (base) => (dispatch) => {
  dispatch(newBase(base))
}

export const createPizzaSauce = (sauce) => (dispatch) => { 
  dispatch(newSauce(sauce))
}