// @flow

export const ISSUES_INPUT_UPDATED = 'api/issues/input/updated';
export const ISSUES_FETCH_SUCCEEDED = 'api/issues/fetch/succeeded';
export const ISSUES_FETCH_FAILED = 'aapi/issues/fetch/failed';


export function issuesInputUpdate(data) {
  return {type: ISSUES_INPUT_UPDATED, data: data};
}

export function issuesFetchSucceeded(data) {
  return {type: ISSUES_FETCH_SUCCEEDED, data: data};
}

export function issuesFetchFailed(data) {
  return {type: ISSUES_FETCH_FAILED, data: data};
}
