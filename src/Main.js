import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import About from "./About";
import Donate from "./Donate";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="navBar">
          <label className="navLabel">
            <NavLink to="/"><img src="/image/Marvel Studios.svg" width="155" height="155" alt="Logo Avengers" /></NavLink>
          </label>

          <ul className="navMenuContainer">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
            <li><a href="mailto:habibi0751@gmail.com" className="btn-sub">Subscribe</a></li>
          </ul>

          <div className="navMenuRES"><NavLink to="/" title="Home"><img src="/icons/home.svg" width="25" alt="Home" /></NavLink></div>
          <div className="navMenuRES"><NavLink to="/movies" title="Movies"><img src="/icons/movies.svg" width="25" alt="Movies" /></NavLink></div>
          <div className="navMenuRES"><NavLink to="/" title="Subscribe"><img src="/icons/subscribe.svg" width="25" alt="Subscribe" /></NavLink></div>
          <div className="navMenuRES"><NavLink to="/about" title="About"><img src="/icons/about.svg" width="25" alt="About" /></NavLink></div>
          <div className="navMenuRES"><NavLink to="/donate" title="Donate"><img src="/icons/donate.svg" width="25" alt="Donate" /></NavLink></div>
        </nav>

        <main className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/about" component={About}/>
          <Route path="/donate" component={Donate}/>
        </main>

        <footer>

          <img src="/image/Marvel Studios WB.svg" width="230"/>

          <div className="footerContainer">

            <p className="footerLeft">
              <span className="fontBold">MCU Moofree - MCU Moofree Watch and Download Marvel Movies</span>, here you can watch and download any Marvel's movies in high quality for free without annoying of advertising, just come and enjoy your movies online.
            </p>

            <div className="footerRight">
              <div className="footerSocialInfo">
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/facebook.svg" width="22" /></a>
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/github.svg" width="22" /></a>
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/whatsapp.svg" width="22" /></a>
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/telegram.svg" width="22" /></a>
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/instagram.svg" width="22" /></a>
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/mail.svg" width="22" /></a>
                <a href="https://habibi2004.tech" className="textHoverRed"><img src="/icons/spotify.svg" width="22" /></a>
              </div>
              <div>
                <p>Built with <a href="https://reactjs.org/" className="lightHoverRed">create react app</a></p>
                <img src="/icons/reactjs.svg" width="15" />
              </div>
              <div>
                <p>Hosted on <a href="https://github.com" className="lightHoverRed">github</a></p>
                <img src="/icons/github.svg" width="15" />
              </div>
              <div>
                <p>Deploy on <a href="https://www.netlify.com" className="lightHoverRed">netlify</a></p>
                <img src="/icons/netlify.svg" width="18" />
              </div>
              <p>Copyright &copy; 2022 • <a href="https://habibi2004.tech/" className="grayHoverRed">Ahmad Habibi</a></p>
            </div>

          </div>
          {/*<p>
            <span className="fontBold">Built with ❤ using <a href="https://reactjs.org" className="textHoverRed">React</a></span><br />
            <span title="Copyright 2022">&copy; 2022</span> • <a href="https://habibi2004.tech" className="textHoverRed">Ahmad Habibi</a>
          </p>*/}

        </footer>
      </HashRouter>
    );
  }
}
 
export default Main;