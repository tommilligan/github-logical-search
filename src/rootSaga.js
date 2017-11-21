// @flow

import { call } from 'redux-saga/effects';
import issuesApi from './api/issuesSaga';

// Here, we register our watcher saga(s) and export as a single generator 
export default function* startForman() {
    console.warn("Starting root saga");
    yield call(issuesApi);
}