import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
