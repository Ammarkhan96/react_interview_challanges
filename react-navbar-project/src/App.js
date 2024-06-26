import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './components/Navbar/Navbar';

const App = ()  => {
  return (
    <Router>
      <Navbar />
      <main>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/service" element={<Services/>}/>
       <Route exact path="/testimonial" element={<Testimonial/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
      </main>
    </Router>
  );
}

export default App;
