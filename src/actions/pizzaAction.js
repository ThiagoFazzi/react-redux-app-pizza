export const PIZZA_CREATOR = 'PIZZA_CREATOR'
//export const ALL_SAUCES_FETCHED = 'ALL_SAUCES_FETCHED'
//export const ALL_TOPPINGS_FETCHED = 'ALL_TOPPINGS_FETCHED'

//Actions Creators

const pizzaCreator = pizza => ({
  type: PIZZA_CREATOR,
    pizza
})

//Dispatch Actions

export const createPizza= () => (dispatch, getState) => {
  if (getState().pizza) return 
    dispatch(pizzaCreator(pizza))
}