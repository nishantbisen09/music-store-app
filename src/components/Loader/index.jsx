import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./loader.scss";
class AlbumLoader extends Component {
	render() {
		return (
			<div className="loader">
				<Loader
					className="loader"
					type="TailSpin"
					color="#535353"
					height={170}
					width={170}
				/>
			</div>
		);
	}
}

export default AlbumLoader;
