import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNavigation from "../components/HeaderNavigation";
import { fetchUser } from "../actions";

const Landing = () => <div>Landing</div>;
const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div>SurveyNew</div>;

export class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<Router>
				<HeaderNavigation />

				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/surveys' component={Dashboard} />
					<Route path='/survey/new' component={SurveyNew} />
				</Switch>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(null, { fetchUser })(App);
