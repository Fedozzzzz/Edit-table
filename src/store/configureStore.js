import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {connectRouter} from "connected-react-router";
import * as reducerForSaga from './reducerForSaga'
//import * as ScheduleReducer from './Schedule'
import tableSagas from '../sagas/TableSagas'

export default function configureStore (history, initialState) {
    const reducers = {
        users: reducerForSaga.usersReducer
       // schedule: ScheduleReducer.scheduleReducer
    };

    const sagaMiddleware = createSagaMiddleware();

    const middleware = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

    sagaMiddleware.run(tableSagas);

    return store;
}
