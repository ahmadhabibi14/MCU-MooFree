import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <main className="content">
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
      </main>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
