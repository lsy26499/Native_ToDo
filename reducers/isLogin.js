import { SET_IS_LOGIN } from '../actions/index';

const initialState = {
	isLogin: false,
};

const isLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_LOGIN: {
			return {
				...state,
				isLogin: action.isLogin,
			};
		}
		default:
			return state;
	}
};

export default isLoginReducer;
