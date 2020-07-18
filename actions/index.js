const { exp } = require('react-native-reanimated');

export const ADD_TODOS = 'ADD_TODOS';
export const DELETE_TODOS = 'DELETE_TODOS';
export const SET_IS_LOGIN = 'SET_IS_LOGIN';

export const addToDos = (toDo) => ({
	type: ADD_TODOS,
	toDo,
});

export const deleteToDos = (idx) => ({
	type: DELETE_TODOS,
	idx,
});

export const setIsLogin = (isLogin) => ({
	type: SET_IS_LOGIN,
	isLogin,
});
