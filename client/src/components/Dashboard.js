import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSurveys } from "../actions";
import "./css/Dashboard.css";

export class Dashboard extends Component {
	componentDidMount = () => {
		this.props.fetchSurveys();
	};

	renderSurveys = () => {
		if (!this.props.surveys) {
			return (
				<div class='spinner-border' role='status'>
					<span class='sr-only'>Loading...</span>
				</div>
			);
		}

		return this.props.surveys.reverse().map((survey) => {
			return (
				<div className='card my-3' key={survey._id}>
					<div className='card-body'>
						<h4 className='card-title'>{survey.title}</h4>
						<h6 className='card-subtitle mb-2 text-muted'>
							Date: {survey.dateSent}
						</h6>
						<p className='card-text'>
							Subject: {survey.subject} <br />
							Body: {survey.body} <br />
							Yes: {survey.yes} <br />
							No: {survey.no} <br />
						</p>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div className='container mt-4'>
				<h2>Dashboard</h2>
				<div className='body'>{this.renderSurveys()}</div>
				<div className='button'>
					<Link to='/survey/new'>
						<button
							type='button'
							className='btn btn-info btn-circle btn-xl m-4'
						>
							<i className='fas fa-plus'></i>
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		surveys: state.surveys,
	};
};

export default connect(mapStateToProps, { fetchSurveys })(Dashboard);
