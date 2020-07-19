import { ADD_TODOS, DELETE_TODOS } from '../actions/index';

const initialState = {
	toDos: [],
};

const toDosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODOS: {
			console.log(action.toDo);
			return {
				...state,
				toDos: [...state.toDos, action.toDo],
			};
		}
		case DELETE_TODOS: {
			return {
				...state,
				toDos: [
					...state.toDos.slice(0, action.idx),
					...state.toDos.slice(action.idx + 1),
				],
			};
		}
		default: {
			return state;
		}
	}
};

export default toDosReducer;
