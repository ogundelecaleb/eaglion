import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Blog from "./blog";
import Home from "./home";
import Contact from "./contact";
import Services from "./services";
import AboutUs from "./aboutUs"
import Products from "./product"
import Projects from "./projects";
import Buyasap from "./buyasap";
import Vant from "./vant";
import Bezi from "./bezi";
import Konix from "./konix";

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
          <Route path="/product" element={<Products />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/buyasap" element={<Buyasap />} />
          <Route path="/vant" element={<Vant />} />
          <Route path="/bezi" element={<Bezi />} />
          <Route path="/konix" element={<Konix />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
