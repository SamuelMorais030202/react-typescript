/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "../../types/reduxTypes";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

type ActionType = {
  payload?: string;
  type: string;
};

const requestStarted = () : ActionType => {
  return { type: REQUEST_STARTED }
};

const requestSucessful = (imageUrl: string) : ActionType => {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageUrl,
  };
};

const requestFailed = (error: string) : ActionType => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  }
}

export const fetchDogImage = () => (async (dispatch : Dispatch) => {
  try {
    dispatch(requestStarted());
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await request.json();
    dispatch(requestSucessful(response.message));
  } catch (error: any) {
    dispatch(requestFailed(error.message))
  } 
});