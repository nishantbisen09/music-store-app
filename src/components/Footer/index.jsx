import React from "react";
import logo from "../../assets/logo.PNG";
import "./footer.scss";

const Footer = () => {
	return (
		<>
			<div className="footer-wrapper">
				<div className="footer-element">
					<div className="logo-container">
						<img src={logo} alt="logo" />
					</div>
					<p>
						1717 Harrison St, San Francisco <br />
						CA 17903, USA
					</p>
				</div>
				<div className="footer-element">
					<h4>MAIN MENU</h4>
					<a href="/home">Home</a>
					<br />
					<a href="/">About</a>
					<br />
					<a href="/">Shop</a>
					<br />
					<a href="/">Help</a>
				</div>
				<div className="footer-element">
					<h4>COMPANY</h4>
					<a href="/">The Company</a>
					<br />
					<a href="/">Careers</a>
					<br />
					<a href="/">Press</a>
				</div>
				<div className="footer-element">
					<h4>DISCOVER</h4>
					<a href="/">The Team</a>
					<br />
					<a href="/">Our History</a>
					<br />
					<a href="/">Brand Motto</a>
				</div>
				<div className="footer-element">
					<h4>FIND US ON</h4>
					<a href="/">Facebook</a>
					<br />
					<a href="/">Twitter</a>
					<br />
					<a href="/">Instagram</a>
				</div>
			</div>
			<hr />
			<div className="copyright">
				<span>&copy; GL Tunes</span>
			</div>
		</>
	);
};

export default Footer;
