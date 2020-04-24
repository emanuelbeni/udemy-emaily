import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

// Shows SurveyForm and SurveyReview
export class SurveyNew extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showFormReview: false,
		};
	}

	toogleVisibility = () => {
		this.setState({
			showFormReview: this.state.showFormReview ? false : true,
		});
	};

	render() {
		if (!this.state.showFormReview) {
			return <SurveyForm onSurveySubmit={this.toogleVisibility} />;
		} else {
			return <SurveyFormReview onCancel={this.toogleVisibility} />;
		}
	}
}

export default reduxForm({
	form: "surveyForm",
})(SurveyNew);
