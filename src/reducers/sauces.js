import { ALL_SAUCES_FETCHED } from "../actions/ingredientsAction";

export default (state = null, action) => {
  switch (action.type) {
    case ALL_SAUCES_FETCHED:
        return [...action.sauces]

    default:
        return state
  }
}