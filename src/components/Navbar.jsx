import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div>
        <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
      </div>
    </nav>
  );
};
export default Navbar;
