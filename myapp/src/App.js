import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import Navbar from './Navbar';

import FormValidation from './formValidation/FormValidation';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FormValidation" element={<FormValidation />} />
      </Routes>
    </Router>
  );
}

export default App;
