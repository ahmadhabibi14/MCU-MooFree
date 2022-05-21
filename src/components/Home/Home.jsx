import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <header className="headerHome">
        <img src="/assets/image/Marvel Studios Dark.svg" className="homeImg" alt="" />
        <h1>Watch and Download Marvel movies for free</h1>
        <NavLink to="/movies">Download Now</NavLink>
      </header>
    </div>
  );
}

export default Home;