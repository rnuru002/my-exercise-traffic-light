import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="traffic-light">
			<div class="light red glow"></div>
			<div class="light yellow"></div>
			<div class="light green"></div>
		</div>
	);
};

export default Home;
