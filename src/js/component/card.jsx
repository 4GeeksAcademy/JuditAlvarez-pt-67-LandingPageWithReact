import React from "react";
const Card = () => {
  return (
    <div className="card" style={{ width: "auto", height: "30rem" }}>
      <img
        src="https://wallpapercave.com/wp/wp5542815.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div class="overflow-hidden">
        <button class="btn btn-primary">Find out More!</button>
      </div>
          
      
      </div>
    </div>
  );
};
export default Card;
