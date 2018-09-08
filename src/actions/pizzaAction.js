export const NEW_BASE = 'NEW_BASE'
export const NEW_SAUCE = 'NEW_SAUCE'

//Actions Creators

const newBase = base => (
  console.log(base),{
  type: NEW_BASE,
  base
})

const newSauce = sauce => ({
  type: NEW_SAUCE,
  sauce
})

//Dispatch Actions

export const createPizzaBase = (base) => (dispatch) => {
    dispatch(newBase(base))
}

export const createPizzaSauce = (sauce) => (dispatch) => { 
    dispatch(newSauce(sauce))
}