import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import fetchMovies from "./fetchMovies";

const rootReducer = combineReducers({
  counterReducer,
  fetchMovies,
});

export default rootReducer;