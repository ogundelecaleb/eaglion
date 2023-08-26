import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Blog from "./blog";
import Home from "./home";
import Contact from "./contact";
import Services from "./services";
import AboutUs from "./aboutUs"

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
