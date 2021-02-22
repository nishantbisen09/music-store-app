import React, { Component } from "react";

class CartItem extends Component {
	render() {
		const {
			name,
			artistName,
			artworkUrl100,
			price,
			quantity,
			id
		} = this.props.albumInCart;
		const { getQuantity } = this.props;
		return (
			<div className="cart-item-wrapper">
				<div className="cart-item-image">
					<img src={artworkUrl100} alt="artwork" />
				</div>
				<div className="cart-item-content">
					<strong>{name}</strong> <br />
					<span>{artistName}</span> <br />
					<span>${price}</span>
				</div>
				<div className="quantity">
					<input
						onChange={e => getQuantity(e, id)}
						type="number"
						min="1"
						defaultValue={quantity}
					/>
				</div>
			</div>
		);
	}
}

export default CartItem;
