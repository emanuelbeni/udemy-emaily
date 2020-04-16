import React, { Component } from "react";
import { Link } from "react-router-dom";

export class HeaderNavigation extends Component {
	renderHeaderMenu = () => {
		// Temp var
		const isSignedIn = true;
		if (isSignedIn) {
			// User is signedIn
			return (
				<div>
					<Link className='nav-item mx-3' to='/'>
						Home
					</Link>
					<Link className='nav-item mx-3' to='/surveys'>
						Survey
					</Link>
					<Link className='nav-item mx-3' to='/'>
						Logout
					</Link>
				</div>
			);
		} else {
			return (
				<div>
					<Link className='nav-item mx-3' to='/'>
						Login With Google
					</Link>
				</div>
			);
		}
	};

	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand'>emaily</a>
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

export default HeaderNavigation;
