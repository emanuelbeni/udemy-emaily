import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

console.log("STRIPE KEY ", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is  ", process.env.NODE_ENV);
