import { MANDATORY_USERNAME, MANDATORY_REPOSITORY } from './actions';

const initialState = {
  username: '',
  repository: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MANDATORY_USERNAME: {
      return {
        ...state,
        username: action.data
      }
    }
    case MANDATORY_REPOSITORY: {
      return {
        ...state,
        repository: action.data
      }
    }
    default:
      return state;
  }
}