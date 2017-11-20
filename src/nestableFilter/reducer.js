// import { DELETE, ADD_FIELD, ADD_NESTED } from './actions';

const initialState = {
  0: {
    type: 'nested',
    operator: 'AND',
    childIds: [1]
  },
  1: {
    type: 'nested',
    operator: 'AND',
    childIds: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  }

  return state;
}