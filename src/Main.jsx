import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import About from "./components/About/About";
import News from "./components/News/News";
 
function Main() {
  return (
    <HashRouter>
      <Header></Header>

      <main className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/about" component={About}/>
        <Route path="/news" component={News}/>
      </main>

      <Footer></Footer>
    </HashRouter>
  );
}

export default Main;