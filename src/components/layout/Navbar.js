import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div class="container-fluid">
        
        <Link className="navbar-brand" to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      </div>

    </nav>
  );
};

export default Navbar;
