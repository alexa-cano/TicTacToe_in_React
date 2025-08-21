import React from "react";
import Header from "./Header";
import PickMenu from "./pickMenu";

//create your first component
const Home = () => {
	return (
		<div className="text-center box">
			<Header />
			<PickMenu />
		</div>
	);
};

export default Home;
