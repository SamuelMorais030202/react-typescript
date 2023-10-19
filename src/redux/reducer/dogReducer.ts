import { REQUEST_STARTED, REQUEST_FAILED, REQUEST_SUCCESSFUL } from "../actions";

const initialState = {
  isFetching: false,
  imageUrl: '',
  errorMessage: '',
}

type ActionType = {
  payload: string;
  type: string;
};

const dogReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        imageUrl: '',
        errorMessage: '',
        isFetching: true,
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageUrl: action.payload,
        errorMessage: '',
      }
    
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: '',
        imageUrl: '',
        errorMessage: action.payload,
      }

    default:
      return state;
  }
};

export default dogReducer;