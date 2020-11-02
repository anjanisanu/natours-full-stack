import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { topToursReducer, tourDetailsReducer } from './reducers/tourReducers';

const reducer = combineReducers({
	topTours: topToursReducer,
	tourDetails: tourDetailsReducer
});

const intialState = {
	// userLogin: null
};

const middleware = [ thunk ];

const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
