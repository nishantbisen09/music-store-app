import React from "react";
import "../Home/home.scss";
import { CART_CROSS, CART_PLUS } from "../../constants";

const Album = props => {
	const { name, artistName, artworkUrl100, inCart } = props.album;
	return (
		<div className="album">
			<img src={artworkUrl100} alt="artwork" /> <br />
			<strong>{name}</strong>
			<br />
			<span>{artistName}</span> <br />
			<i
				onClick={() => {
					props.add(props.album);
				}}
				className={inCart ? CART_CROSS : CART_PLUS}
			/>
		</div>
	);
};

export default Album;
