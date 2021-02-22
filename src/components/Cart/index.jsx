import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./cart.scss";
import { getQuantity, calculateCartTotal } from "./CartService";
import CartItem from "./CartItem";

class Cart extends Component {
	getQuantity = (event, id) => {
		getQuantity(event, id, this.props);
	};

	calculateCartTotal = () => {
		return calculateCartTotal(this.props);
	};

	render() {
		const { albumsInCart } = this.props;
		return (
			<>
				<Header />
				<hr />
				<div className="cart-body">
					<div className="shopping-cart">
						<h2>Shopping Cart</h2>
						<hr />
						<div className="cart-wrapper">
							{albumsInCart.map((albumInCart, index) => (
								<CartItem
									key={index}
									albumInCart={albumInCart}
									getQuantity={this.getQuantity}
								/>
							))}
						</div>
						<hr />
					</div>
					<div className="summary">
						<h2>Summary</h2>
						<hr />
						<div className="amount-wrapper">
							<div className="sub-total">
								<h3>SUB TOTAL</h3>
							</div>
							<div className="sub-total-amount">
								<h3> ${this.calculateCartTotal()}</h3>
							</div>
						</div>
						<div className="shipping-wrapper">
							<div className="shipping">
								<h3>SHIPPING</h3>
							</div>
							<div className="shipping-amount">
								<h3> FREE</h3>
							</div>
						</div>

						<hr />
						<div className="total-wrapper">
							<div className="total">
								<h3>TOTAL</h3>
							</div>
							<div className="total-amount">
								<h3>${this.calculateCartTotal()} </h3>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Cart;
