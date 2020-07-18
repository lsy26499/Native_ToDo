import { combineReducers } from 'redux';
import toDoReducer from './toDos';
import isLoginReducer from './isLogin';

export default combineReducers({
	toDoReducer,
	isLoginReducer,
});
