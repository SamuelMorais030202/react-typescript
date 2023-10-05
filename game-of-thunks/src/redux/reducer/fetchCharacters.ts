import { REQUEST_STARTED, REQUEST_SUCCESSFULL, REQUEST_NAME } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  search: '',
  listOfCharacters: [],
  character: [],
}

type ActionType = {
  type: string;
  payload:  Record<string, unknown>[],
}

const fetchCharactersReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
      }
    case REQUEST_SUCCESSFULL:
      return {
        ...state,
        isFetching: false,
        listOfCharacters: action.payload,
      }
    case REQUEST_NAME:
      return {
        ...state,
        isFetching: false,
        character: action.payload,
      }
    default:
      return state
  }
};

export default fetchCharactersReducer;