import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'


export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, sagaMiddleware, middleware, reduxImmutableStateInvariant())));
    sagaMiddleware.run(rootSaga);
    return store;
}
