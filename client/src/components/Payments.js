import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { fetchUser, handleToken } from "../actions";

export class Payments extends Component {
	render() {
		const amount = 500;
		return (
			<StripeCheckout
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
				token={(token) => this.props.handleToken(token, amount)}
				amount={amount}
				name='Emaily'
				description='$5 for 5 email credits'
			>
				<a href='#'>
					<button className='btn btn-primary'>Add Credits</button>
				</a>
			</StripeCheckout>
		);
	}
}

export default connect(null, { fetchUser, handleToken })(Payments);
