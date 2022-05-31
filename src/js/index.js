//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const SelectedColor = () => {
	const [selectedColor, setselectedColor] = useState("");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setselectedColor("red")}
				className={
					"light red " + (selectedColor === "red" ? "glow" : "")
				}></div>
			<div
				onClick={() => setselectedColor("yellow")}
				className={
					"light yellow " + (selectedColor === "yellow" ? "glow" : "")
				}></div>
			<div
				onClick={() => setselectedColor("green")}
				className={
					"light green " + (selectedColor === "green" ? "glow" : "")
				}></div>
		</div>
	);
};
//render your react application
ReactDOM.render(<SelectedColor />, document.querySelector("#app"));
