import { Dispatch } from "../../types/type";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFULL = 'REQUEST_SUCCESSFULL';
export const REQUEST_NAME = 'REQUEST_NAME';

export function requestStarted() {
  return { type: REQUEST_STARTED }
}

// action com lista de personagens
export function requestSuccessful(listOfCharacters: Record<string, unknown>[]) {
  return {
    type: REQUEST_SUCCESSFULL,
    payload: listOfCharacters,
  }
}

// action com personagem específico
export function requestName(character: Record<string, unknown>) {
  return {
    type: REQUEST_NAME,
    payload: character,
  }
}

// busca lista de personagem
export function fetchListOfCharacters() {
  return async (dispatch: Dispatch) => {
    dispatch(requestStarted());
    try {
      const response = await fetch('https://anapioficeandfire.com/api/characters');
      const data = await response.json();
      dispatch(requestSuccessful(data));
    } catch (error) {
      console.log(error);
    }
  }
}

// busca personagem pelo nome
export function fetchCharacterName(name: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(requestName(data));
    } catch (error) {
      console.log(error);
    }
  }
}