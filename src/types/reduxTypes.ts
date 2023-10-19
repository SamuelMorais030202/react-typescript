import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk'

export type ReduxState = {
  dogReducer: {
    isFetching: boolean;
    imageUrl: string;
    errorMessage: string;
  }
}

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>