import { ReduxState } from "../../types";
import { ActionType } from "./counterReducer";

const INITIAL_STATE : ReduxState = {
  isFetching: false,
  movies: [],
}

const fetchMovies = (state = INITIAL_STATE, action: ActionType) => {
  switch(action.type) {
    case "REQUEST_STARTED":
      return {
        ...state,
        isFetching: true,
      }
    case "REQUEST_SUCCESSFUL":
      return {
        isFetching: false,
        movies: action.payload,
      }
    default:
      return state;
  }
}

export default fetchMovies;