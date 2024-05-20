import React from "react";
const Navbar= () => {
	return (
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <div>
    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
    </div>
    <div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled text-light" aria-disabled="true">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-light" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
     );
    };
    export default Navbar;