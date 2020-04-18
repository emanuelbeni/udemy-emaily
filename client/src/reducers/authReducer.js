import { SIGN_IN, SIGN_OUT, FETCH_USER } from "../actionTypes";

// Auth reducer
export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
};
