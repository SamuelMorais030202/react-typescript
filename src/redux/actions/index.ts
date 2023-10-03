import { Dispatch, ReduxState } from "../../types";

export const actionCreator = (increment = 1) => ({ 
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

export const clickCounter = () => ({
  type: 'INCREMENT_CLICK',
});

export const requestStarted = () => {
  return { type: "REQUEST_STARTED" };
};

export const requestSuccessful = (movies : string[]) => {
  return {
    type: "REQUEST_SUCCESSFUL",
    payload: movies,
  };
};

type GetState = () => ReduxState;

export const fetchMovies = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    dispatch(requestStarted());
    console.log(getState);
    try {
      // const response = await fetch('https://some-movies-api.com');
      // const data = await response.json();
      const teste = ['ahaha', 'sshshshsh']
      dispatch(requestSuccessful(teste));
    } catch (error) {
      console.log(error)
    }
  }
}