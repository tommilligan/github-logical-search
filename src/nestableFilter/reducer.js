import { DELETE, ADD_FIELD, ADD_NESTED } from './actions';

const initialState = {
  0: {
    type: 'ested',
    operator: 'AND',
    childIds: [1]
  },
  1: {
    type: 'ested',
    operator: 'AND',
    childIds: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  }

  return state;
}