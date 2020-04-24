import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash";
import formFields from "./formFields";
import validateEmails from "../../utils/validateEmails";
import "./SurveyForm.css";

export class SurveyForm extends Component {
	renderInputField = ({ input, label, placeholder, meta }) => {
		return (
			<div className='form-group'>
				<label>{label}</label>
				<input {...input} className='form-control' placeholder={placeholder} />
				{this.renderError(meta)}
			</div>
		);
	};

	renderError = ({ error, touched }) => {
		if (error && touched) {
			return (
				<div className='alert alert-danger mt-1'>
					<small className='text-danger'>{error}!</small>
				</div>
			);
		}
	};

	renderFields = () => {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={this.renderInputField}
					type='text'
					label={label}
					name={name}
				/>
			);
		});
	};

	render() {
		return (
			<div className='container mt-4'>
				<h4 className='my-3'>Please enter survey details!</h4>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<div className='d-flex justify-content-between'>
						<Link to='/surveys' className='btn btn-danger'>
							Cancel
						</Link>
						<button type='submit' className='btn btn-primary'>
							Next
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const validate = (values) => {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || "");

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value";
		}
	});

	return errors;
};

export default reduxForm({
	form: "surveyForm",
	validate: validate,
	destroyOnUnmount: false,
})(SurveyForm);
