import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type ReduxState = {
  isFetching: boolean;
  movies: string[];
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>