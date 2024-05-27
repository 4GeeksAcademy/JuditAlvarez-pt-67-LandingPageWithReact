import React from "react";
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center fw-bold">A Warm Welcome!</h1>
      <p className="lead mx-5">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>

      <a className="btn btn-primary btn-lg m-3" href="#" role="button">
        Call to action!
      </a>
    </div>
  );
};
export default Jumbotron;
