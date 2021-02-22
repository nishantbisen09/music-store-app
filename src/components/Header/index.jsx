import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.PNG";
const Header = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<ul>
				<li>
					{" "}
					<Link className="nav-link grey" to="/home">
						Home
					</Link>{" "}
				</li>
				<li className="cart-btn">
					{" "}
					<Link className="nav-link white" to="/cart">
						<i className="fa fa-shopping-cart" />
						Your Cart
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
