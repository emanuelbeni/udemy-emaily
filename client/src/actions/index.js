import axios from "axios";
import { FETCH_USER } from "../actionTypes";

export const fetchUser = () => {
	return async (dispatch) => {
		const response = await axios.get("/api/current_user");

		return dispatch({
			type: FETCH_USER,
			payload: response.data,
		});
	};
};

export const handleToken = (token, amount) => {
	return async (dispatch) => {
		const response = await axios.post("/api/stripe", { token, amount });

		return dispatch({
			type: FETCH_USER,
			payload: response.data,
		});
	};
};
