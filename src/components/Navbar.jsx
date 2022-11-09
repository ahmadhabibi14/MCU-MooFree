import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row m-4 space-x-3">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/news">News</NavLink>
    </nav>
  )
}

export default Navbar;