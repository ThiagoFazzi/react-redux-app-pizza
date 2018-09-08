export const NEW_BASE = 'NEW_BASE'
export const NEW_SAUCE = 'NEW_SAUCE'
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

const updateTotalPrice = total => ({
  type: TOTAL_PRICE,
  total
})

//Dispatch Actions

export const updatePrice = (base, sauce, toppings) => (dispatch) => {
  const totalPrice = base.price + sauce.price
  
  console.log(base)
  console.log(sauce)
  //console.log(base.price)

  console.log(totalPrice)
  dispatch(updateTotalPrice(totalPrice))
}

export const createPizzaBase = (base) => (dispatch) => {
  dispatch(newBase(base))
}

export const createPizzaSauce = (sauce) => (dispatch) => { 
  dispatch(newSauce(sauce))
}