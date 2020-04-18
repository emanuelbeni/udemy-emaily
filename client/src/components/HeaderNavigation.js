import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

export class HeaderNavigation extends Component {
	renderHeaderMenu = () => {
		switch (this.props.auth) {
			case null:
				return <div>Loading...</div>;
			case false:
				return (
					<>
						<li className='nav-link mx-3'>
							<a href='/auth/google'>Login With Google</a>
						</li>
					</>
				);
			default:
				return (
					<>
						<li className='nav-item mx-3'>
							<Payments />
						</li>
						<li className='nav-link mx-3'>Credit: {this.props.auth.credits}</li>
						<li className='nav-link mx-3'>
							<Link to='/surveys'>Survey</Link>
						</li>
						<li className='nav-link mx-3'>
							<a href='/api/logout'>Logout</a>
						</li>
					</>
				);
		}
	};

	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link to={this.props.auth ? "/surveys" : "/"} className='navbar-brand'>
					emaily
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>{this.renderHeaderMenu()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};

export default connect(mapStateToProps, null)(HeaderNavigation);
