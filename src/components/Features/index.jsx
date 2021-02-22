import React from "react";
import tickImage from "../../assets/tick-inside-a-circle.png";

const Features = () => {
	return (
		<div className="features">
			<span>GL Tune Features</span>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse porro
				sequi minus quod deleniti ducimus fuga molestias nobis, minima ut aut
				exercitationem aliquam quibusdam nihil.
			</p>{" "}
			<br />
			<div className="feature-wrapper">
				<div className="feature">
					<div className="feature-image">
						<img src={tickImage} alt="tick" />
					</div>
					<div className="feature-content">
						<span>Discover</span>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
							saepe cum laborum commodi aspernatur ea aperiam esse accusamus
							distinctio! Voluptate.
						</p>
					</div>
				</div>

				<div className="feature">
					<div className="feature-image">
						<img src={tickImage} alt="tick" />
					</div>
					<div className="feature-content">
						<span>Family Sharing</span>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
							saepe cum laborum commodi aspernatur ea aperiam esse accusamus
							distinctio! Voluptate.
						</p>
					</div>
				</div>
				<div className="feature">
					<div className="feature-image">
						<img src={tickImage} alt="tick" />
					</div>
					<div className="feature-content">
						<span>Available Everywhere</span>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
							saepe cum laborum commodi aspernatur ea aperiam esse accusamus
							distinctio! Voluptate.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
