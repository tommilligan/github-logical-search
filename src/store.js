import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware(); 
let store = {
    ...createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware),
    ),
    runSaga: sagaMiddleware.run(rootSaga),
};

export default store