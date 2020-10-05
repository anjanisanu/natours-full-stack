import { combineReducers } from 'redux';
import tourReducer from './tourReducer';

export default combineReducers({
	tours: tourReducer
});
