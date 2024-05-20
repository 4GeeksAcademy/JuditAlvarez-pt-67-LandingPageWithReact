import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className=" container-fluid text-center">
			
			<div class ="bg-dark "><Navbar/></div>
			<div class="container">
			<div class= "bg-secondary bg-opacity-25"><Jumbotron/></div>
			<div class= "row d-flex text-center justify-content-center m-3 p-3">
				
			  <Card/>
			  <Card/>
			  <Card/>
			  <Card/>
			</div>
			</div>
			<div class = " container-fluid bg-dark text-light"><Footer/></div>
		
	    </div>
			
	
	);
};

export default Home;
