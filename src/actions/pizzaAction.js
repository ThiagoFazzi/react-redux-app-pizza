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

const updateTotalPrice = total => ({
  type: TOTAL_PRICE,
  total
})

//Dispatch Actions

export const createPizzaAddTopping = (topping) => dispatch => {
  console.log('dispatch add', topping)
  dispatch(addTopping(topping))
}

export const createPizzaRemoveTopping = (topping) => dispatch => {
  console.log('dispatch remove', topping)
  dispatch(removeTopping(topping))
}
export const updatePrice = (total) => (dispatch) => {
  console.log('dispatch',total)
  dispatch(updateTotalPrice(total))
}

export const createPizzaBase = (base) => (dispatch) => {
  dispatch(newBase(base))
}

export const createPizzaSauce = (sauce) => (dispatch) => { 
  dispatch(newSauce(sauce))
}