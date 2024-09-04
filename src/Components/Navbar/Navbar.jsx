import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
// import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <img src='../assets/logo.png' alt="Logo" className='logo' />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/career-guidance">Career Guidance</Link></li>
        <li><Link to="/resource-portal">Resources</Link></li>
        <li><Link to="/career-tools">Career Tools</Link></li>
        <li><Link to="/cdsn">CDSN</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        
        <li><button className='btn'>Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
