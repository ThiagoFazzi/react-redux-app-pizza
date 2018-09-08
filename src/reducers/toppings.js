import { ALL_TOPPINGS_FETCHED } from "../actions/ingredientsAction";

export default (state = null, action) => {
  switch (action.type) {
    case ALL_TOPPINGS_FETCHED:
        return [...action.toppings]
    //case EVENT_CREATE_SUCCESS:
    //  return [...state, action.events]
    //case EVENT_DELETE_SUCCESS:
    //  return state && state.filter(event => event.id !== action.event)
    default:
        return state
  }
}