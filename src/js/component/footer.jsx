import React from "react";

const styleFooter = {
	marginTop: "auto",
};

export const Footer = () => {
	return (
		<footer className="py-5 bg-dark footer" style={styleFooter}>
			<div className="container">
				<p className="m-0 text-center text-white">
					Copyright © Your Website 2021
				</p>
			</div>
		</footer>
	);
};
