// @flow

export type DELETE_FILTER_ACTION = 'nestableFilter/DELETE'
export const DELETE_FILTER = 'nestableFilter/DELETE'
export type ADD_NESTED_FILTER_ACTION = 'nestableFilter/ADD_NESTED'
export const ADD_NESTED_FILTER = 'nestableFilter/ADD_NESTED'
export type ADD_FIELD_FILTER_ACTION = 'nestableFilter/ADD_FIELD'
export const ADD_FIELD_FILTER = 'nestableFilter/ADD_FIELD'

export const FILTER_OPERATOR = 'nestableFilter/FILTER_OPERATOR'

type DeleteFilterAction = { type: DELETE_FILTER_ACTION, data: string };
export function deleteFilter(data: string): DeleteFilterAction {
  return {type: DELETE_FILTER, data: data};
}

type AddNestedFilterAction = { type: ADD_NESTED_FILTER_ACTION, data: string };
export function addNestedFilter(data: string): AddNestedFilterAction {
  return {type: ADD_NESTED_FILTER, data: data};
}

type AddFieldFilterAction = { type: ADD_FIELD_FILTER_ACTION, data: string };
export function addFieldFilter(data: string): AddFieldFilterAction {
  return {type: ADD_FIELD_FILTER, data: data};
}

export function filterOperator(data) {
  return {type: FILTER_OPERATOR, data: data};
}

export type FilterAction =
| DeleteFilterAction
| AddNestedFilterAction
| AddFieldFilterAction
