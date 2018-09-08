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