// @flow

import { race, put, select, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { issuesFetchFailed, issuesFetchSucceeded } from './actions';
import { MANDATORY_USERNAME, MANDATORY_REPOSITORY } from '../mandatoryInfo/actions';

function axiosIssues(mandatory) {
  return axios.get(`https://api.github.com/repos/${mandatory.username}/${mandatory.repository}/issues`);
};

function* fetchIssues(action) {
    console.log("Fetching Github issues");
    const state = yield select();
    console.warn(state)
    let mandatory = state.mandatoryInfo

    if (mandatory.username !== '' && mandatory.repository !== '') {
      try {
          const response = yield call(axiosIssues, mandatory);
          const issuesData = response.data;
          yield put(issuesFetchSucceeded(issuesData));
      } catch (e) {
          console.error(e);
          yield put(issuesFetchFailed("Error fetching issues. Are you sure the repo exists?"));
      }
    } else {
      console.warn("Not updating issues, need username and repo");
    }
}

export default function* issuesSaga() {
    console.warn("Starting issuesSaga saga");
    yield takeEvery(MANDATORY_REPOSITORY, fetchIssues);
  }