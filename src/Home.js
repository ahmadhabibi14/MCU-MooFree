import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="headerHome">
          <img src="/image/Marvel Studios Dark.svg" className="homeImg"/>
          <h1>Download Marvel movies for free</h1>
          <NavLink to="/movies">Download Now</NavLink>
        </header>
      </div>
    );
  }
}
 
export default Home;