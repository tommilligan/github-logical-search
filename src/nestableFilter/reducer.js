import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';

import { DELETE_FILTER, ADD_FIELD_FILTER, ADD_NESTED_FILTER, FILTER_OPERATOR } from './actions';

const partialFilterData = {
  type: 'nested',
  operator: 'AND',
  childIds: [],
  field: null,
  query: null
}

const initialState = Immutable.Map({
  '0': {
    ...partialFilterData,
    parentId: null
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_OPERATOR: {
      let { operator, filterId } = action.data;
      return state
        .update(filterId, filter => {
          return {
            ...filter,
            operator
          };
        })
    }
    case DELETE_FILTER: {
      let filterId = action.data;
      let parentId = state.get(filterId).parentId;
      // let childIds = state.get(filterId).childIds;
      console.log(`Deleting filter ${filterId}`)
      // Only allowed if we are not at the root node
      if (filterId !== '0') {
        return state
          .update(parentId, parent => {
            let childIds = parent.childIds.filter(childId => childId !== filterId)
            return {
              ...parent,
              childIds
            };
          })
          .delete(filterId); 
          // TODO also delete child keys, as deleteAll is not yet a thing
      } else {
        return state;
      }
    }
    case ADD_NESTED_FILTER: {
      let parentId = action.data;
      let filterId = uuidv4();
      console.log(`Adding nested filter ${filterId}`)
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
      console.log(`Adding field filter ${filterId}`)
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