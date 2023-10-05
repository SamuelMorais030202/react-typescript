import { combineReducers } from "redux";
import fetchCharactersReducer from "./fetchCharacters";

const rootReducer = combineReducers({
  fetchCharactersReducer,
});

export default rootReducer;