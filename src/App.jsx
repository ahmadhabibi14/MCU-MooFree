import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Comics from "./pages/Comics.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Community from "./pages/Community.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-[90vh] dark:bg-zinc-800 dark:text-zinc-200 pt-24 px-14 pb-10">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/comics" element={<Comics/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/community" element={<Community/>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
