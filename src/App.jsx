import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Features from './Components/Features/Features';
import Title from './Components/Title/Title';
import Home from './Components/Home/Home';
import CareerGuidance from './Components/CareerGuidance/CareerGuidance';
import Contact from './Components/Contact/Contact';
import ResourcePortal from './Components/ResourcePortal/ResourcePortal'; // Ensure this import is correct

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <Home />
              <div className='container'>
                <Title />
                <Features />
              </div>
            </div>
          } />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource-portal" element={<ResourcePortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
