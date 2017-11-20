import { Map } from 'immutable';
import uuidv4 from 'uuid/v4';

import { DELETE_FILTER, ADD_FIELD_FILTER, ADD_NESTED_FILTER } from './actions';

const partialFilterData = {
  type: 'nested',
  operator: 'AND',
  childIds: []
}

const initialState = Map({
  '0': {
    type: 'nested',
    operator: 'AND',
    childIds: ['2'],
    parentId: null
  },
  '2': {
    type: 'nested',
    operator: 'AND',
    childIds: [],
    parentId: '0'
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FILTER: {
      let filterId = action.data;
      let parentId = state.get(filterId).parentId;
      let newState = state;
      console.log(`Deleting filter, f ${filterId} p ${parentId}`)

      // Only allowed if we are not at the root node
      if (filterId !== '0') {
        newState = newState
          .update(parentId, parent => {
            let childIds = parent.childIds.filter(childId => childId !== filterId)
            console.log(childIds);
            return {
              ...parent,
              childIds
            };
          }).deleteIn(filterId);
        console.log(newState);
      }
      return newState;
    }
    case ADD_NESTED_FILTER: {
      let parentId = action.data;
      let filterId = uuidv4();
      const newState = state
        .update(parentId, parent => {
          let childIds = parent.childIds.concat(filterId)
          return {
            ...parent,
            childIds
          };
        }).set(filterId, {
          ...partialFilterData,
          parentId: parentId
        });
      return newState;
    }
    case ADD_FIELD_FILTER: {
      let parentId = action.data;
      let filterId = uuidv4();
      const newState = state
        .update(parentId, parent => {
          let childIds = parent.childIds.concat(filterId)
          return {
            ...parent,
            childIds
          };
        }).set(filterId, {
          ...partialFilterData,
          parentId: parentId,
          type: 'field'
        });
      return newState;
    }
    default:
      return state;
  }
}