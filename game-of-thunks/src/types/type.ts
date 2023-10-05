import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type ReduxState = {
  fetchCharactersReducer: {
    isFetching: boolean,
    search: '',
    listOfCharacters: [],
    character: [],
  }
}

export type Character = {
  aliases: string[];
  allegiances: string[];
  books: string[];
  born: string;
  culture: string;
  died: string;
  father: string;
  gender: string;
  mother: string;
  name: string;
  playedBy: string[];
  povBooks: string[];
  spouse: string;
  titles: string[];
  tvSeries: string[];
  url: string;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>