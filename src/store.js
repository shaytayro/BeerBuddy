import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import beersReducer from './beersReducer';

const store = createStore(
    combineReducers({
        beersReducer
    }),
    {},
    applyMiddleware(thunk)
)

export default store;
