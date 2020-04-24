import React, { Component } from "react";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import formFields from "./formFields";
import { submitSurvey } from "../../actions";
import "./SurveyFormReview.css";

export class SurveyFormReview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonClicked: false,
		};
	}

	setButtonClicked = () => {
		this.setState({ buttonClicked: true });
	};

	renderContent = () => {
		if (this.state.buttonClicked) {
			return (
				<div class='spinner-border' role='status'>
					<span class='sr-only'>Loading...</span>
				</div>
			);
		}

		return (
			<div className='container mt-4'>
				<h4 className='my-3'>Please confirm your entries</h4>
				{this.renderdisabledFields()}
				<div className='d-flex justify-content-between mt-3'>
					<button className='btn btn-danger' onClick={this.props.onCancel}>
						Back
					</button>
					<button
						className='btn btn-success'
						onClick={() => {
							this.setButtonClicked();

							return this.props.submitSurvey(
								this.props.form.values,
								this.props.history
							);
						}}
					>
						Send Survey
					</button>
				</div>
			</div>
		);
	};

	renderdisabledFields = () => {
		const reviewFields = _.map(formFields, (field) => {
			return (
				<div key={field.name}>
					<label>{field.label}</label>
					<input
						className='form-control'
						value={this.props.form.values[field.name]}
						readOnly
					/>
				</div>
			);
		});

		return reviewFields;
	};

	render() {
		return <>{this.renderContent()}</>;
	}
}

const mapStateToProps = (state) => {
	return {
		form: state.form.surveyForm,
	};
};

export default connect(mapStateToProps, { submitSurvey })(
	withRouter(SurveyFormReview)
);
