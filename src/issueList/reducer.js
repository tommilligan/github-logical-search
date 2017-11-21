
import { ISSUES_FETCH_SUCCEEDED, ISSUES_FETCH_FAILED } from '../api/actions';

const initialState = {
  page: 1,
  issues: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ISSUES_FETCH_SUCCEEDED:
      return {
        ...state,
        issues: action.data,
        error: null
      }
    case ISSUES_FETCH_FAILED:
      return {
        ...state,
        error: action.data
      }
    default:
      return state;
  }
}