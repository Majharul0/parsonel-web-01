import React from 'react';
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Footer from './component/footer';
import Nav from "./component/nav";
import Animatedcursor from "./component/cursor.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Animatedcursor/>
    <Router>
    <Nav/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        
    <Footer/>
    </Router>
  </>
  );
}

export default App;
