//import jason file that contain default pizza bases, sauces and toppings
import dbJson from '../db'

export const ALL_BASES_FETCHED = 'ALL_BASES_FETCHED'
export const ALL_SAUCES_FETCHED = 'ALL_SAUCES_FETCHED'
export const ALL_TOPPINGS_FETCHED = 'ALL_TOPPINGS_FETCHED'

//Actions Creators

const allBasesFetched = bases => ({
  type: ALL_BASES_FETCHED,
    bases
})

const allSaucesFetched = sauces => ({
  type: ALL_SAUCES_FETCHED,
    sauces
})

const allToppingsFetched = toppings => ({
  type: ALL_TOPPINGS_FETCHED,
    toppings
})

//Dispatch Actions

export const loadAllBases= () => (dispatch, getState) => {
  if (getState().bases) return 
    dispatch(allBasesFetched(dbJson.bases))
}

export const loadAllSauces= () => (dispatch, getState) => {
  if (getState().sauces) return 
    dispatch(allSaucesFetched(dbJson.sauces))
}

export const loadAllToppings= () => (dispatch, getState) => {
  if (getState().toppings) return 
    dispatch(allToppingsFetched(dbJson.toppings))
}