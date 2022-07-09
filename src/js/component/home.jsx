import React from "react";

import { Jumbotron } from "./jumbotron.jsx";
import { NavBar } from "./navbar.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//create your first component

const styleDiv = {
	background: "orange",
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
};

export class Home extends React.Component {
	render() {
		return (
			<div style={styleDiv}>
				<NavBar />
				<div className="mx-5 my-5 px-5 pt-5">
					<Jumbotron />
					<div className="row text-center">
						<div className="col-sm-3">
							<Card
								imageUrl="https://articles-img.sftcdn.net/images/f_auto,q_auto/w_1024,h_640,c_scale/v1582543550/baloncesto_kobe_bryant_1_rdq4ma/baloncesto_kobe_bryant_1_rdq4ma-1024x640.jpg"
								cardTitle="Black Mamba Returns!"
								content="There are many variations of passages of 
								Lorem Ipsum available, but the majority have suffered 
								alteration in some form,"
								url="#"
								label="Find Out More!"
							/>
						</div>
						<div className="col-sm-3">
							<Card
								imageUrl="https://articles-img.sftcdn.net/images/f_auto,q_auto/w_1024,h_640,c_scale/v1582543551/futbol_maradona_pele_zidane_3_mm9lpq/futbol_maradona_pele_zidane_3_mm9lpq-1024x640.jpg"
								cardTitle="Maradona, Pele and Zizou"
								content="There are many variations of passages of 
							Lorem Ipsum available, but the majority have suffered 
							alteration in some form, "
								url="#"
								label="Find Out More!"
							/>
						</div>
						<div className="col-sm-3">
							<Card
								imageUrl="https://articles-img.sftcdn.net/images/f_auto,q_auto/w_1024,h_640,c_scale/v1582543551/futbol_1_pq3pid/futbol_1_pq3pid-1024x640.jpg"
								cardTitle="Champions League Balls"
								content="Lorem ipsum dolor sit amet, consectetur 
							adipiscing elit, sed do eiusmod tempor incididunt ut labore 
							et dolore magna aliqua."
								url="#"
								label="Find Out More!"
							/>
						</div>
						<div className="col-sm-3">
							<Card
								imageUrl="https://articles-img.sftcdn.net/images/f_auto,q_auto/w_1024,h_640,c_scale/v1582543550/baloncesto_bryan_michael_jordan_5_wwcmpb/baloncesto_bryan_michael_jordan_5_wwcmpb-1024x640.jpg"
								cardTitle="Mike and Kobe"
								content="Sed ut perspiciatis unde omnis iste natus 
							error sit voluptatem accusantium doloremque laudantium."
								url="#"
								label="Find Out More!"
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
