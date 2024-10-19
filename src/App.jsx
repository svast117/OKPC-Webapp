import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './home';
import Header from "./component/header";
import Footer from "./component/footer";
import Services from './services';
import About from './about';
import Contact from './contact';
import './styles.css';

function App() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    );
  }

export default App;
