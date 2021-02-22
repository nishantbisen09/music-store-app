import React from "react";
import "./paginator.scss";

const Paginator = ({ handlePage, albums }) => {
	return (
		<div className="paginator-wrapper">
			<div className="previous">
				<h4>
					<strong
						onClick={() => {
							handlePage("prev", albums);
						}}
					>
						Previous
					</strong>
				</h4>
			</div>
			<div className="next">
				<h4>
					<strong
						onClick={() => {
							handlePage("next", albums);
						}}
					>
						Next
					</strong>
				</h4>
			</div>
		</div>
	);
};

export default Paginator;
