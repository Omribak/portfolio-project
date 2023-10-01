import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/AboutMeLink/About";
import Projects from "./components/ProjectsLink/Projects";
import Contact from "./components/ContactLink/Contact";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
