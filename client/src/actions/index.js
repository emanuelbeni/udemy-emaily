import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "../actionTypes";

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

export const submitSurvey = (values, history) => {
	return async (dispatch) => {
		const res = await axios.post("/api/surveys", values);

		history.push("/surveys");
		return dispatch({ type: FETCH_USER, payload: res.data });
	};
};

export const fetchSurveys = () => {
	return async (dispatch) => {
		const response = await axios.get("/api/surveys");

		return dispatch({ type: FETCH_SURVEYS, payload: response.data });
	};
};
