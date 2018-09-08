import { ALL_BASES_FETCHED } from "../actions/ingredientsAction";

export default (state = null, action) => {
  switch (action.type) {
    case ALL_BASES_FETCHED:
        return [...action.bases]
    //case EVENT_CREATE_SUCCESS:
    //  return [...state, action.events]
    //case EVENT_DELETE_SUCCESS:
    //  return state && state.filter(event => event.id !== action.event)
    default:
        return state
  }
}