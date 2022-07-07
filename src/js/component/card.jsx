import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
	return (
		<div className="card mt-5">
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.cardTitle}</h5>
				<p className="card-text">{props.content}</p>
			</div>
			<div className="card-footer">
				<a href={props.url} className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.string,
	url: PropTypes.string,
	label: PropTypes.string,
	imageUrl: PropTypes.string,
	cardTitle: PropTypes.string,
};
