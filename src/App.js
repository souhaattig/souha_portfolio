import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="souha_portfolio" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
