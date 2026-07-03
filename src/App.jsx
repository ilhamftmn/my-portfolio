import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsDetail from "./pages/ProjectsDetail";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/project/:slug" element={<ProjectsDetail />} />

    </Routes>
  );
}

export default App;