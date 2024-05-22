import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div classNameName=" container-fluid text-center">
      <div className="bg-dark ">
        <Navbar />
      </div>
      <div className="container">
        <div className="bg-secondary bg-opacity-25">
          <Jumbotron />
        </div>

        <div className="container">
          <div className="row d-flex text-center justify-content-center">
            <div className="col-sm.12 col-md-2  m-5">
              <Card />
            </div>
            <div className="col-sm-12 col-md-2 m-5">
              <Card />
            </div>
            <div className="col-sm-12 col-md-2 m-5">
              <Card />
            </div>
            <div className="col-sm-12 col-md-2 m-5">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div classNameName=" container-fluid   ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
