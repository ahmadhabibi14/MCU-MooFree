import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navBar">
      <label className="navLabel">
        <NavLink to="/"><img src="/assets/image/Marvel Studios.svg" width="155" height="155" alt="Logo Avengers" /></NavLink>
      </label>

      <ul className="navMenuContainer">
        <li><NavLink exact activeClassName="navLinkActive" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="navLinkActive" to="/movies">Movies</NavLink></li>
        <li><NavLink activeClassName="navLinkActive" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="navLinkActive" to="/news">News</NavLink></li>
      </ul>

      <div className="navMenuRES"><NavLink exact activeClassName="navLinkActive" to="/" title="Home"><img src="/assets/icons/home.svg" width="25" alt="Home" /></NavLink></div>
      <div className="navMenuRES"><NavLink activeClassName="navLinkActive" to="/movies" title="Movies"><img src="/assets/icons/movies.svg" width="25" alt="Movies" /></NavLink></div>
      <div className="navMenuRES"><NavLink activeClassName="navLinkActive" to="/about" title="About"><img src="/assets/icons/about.svg" width="25" alt="About" /></NavLink></div>
      <div className="navMenuRES"><NavLink activeClassName="navLinkActive" to="/news" title="News"><img src="/assets/icons/news.svg" width="25" alt="News" /></NavLink></div>
    </nav>
  )
}

export default Header;