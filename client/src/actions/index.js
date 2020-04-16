import axios from "axios";
import { SIGN_IN, SIGN_OUT, FETCH_USER } from "../actionTypes";

export const fetchUser = () => {
	console.log("fetchUser called");
	return function (dispatch) {
		axios.get("/api/current_user").then((res) =>
			dispatch({
				type: FETCH_USER,
				payload: res,
			})
		);
	};
};
