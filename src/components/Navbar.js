import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      <Link to='/' className='navbar-logo'>
          <img
            src="/images/aahaan-logo.png"
            alt="AAHAAN Logo"
            style={{
            width: '50px',
              height: '50px',
           borderRadius: '50%',
              objectFit: 'cover'
            }}
            
          />
   
        </Link>
        <span
          className="ml-3 text-5xl font-bold italic tracking-wider"
          style={{
            color: '#FFD700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'Poppins, sans-serif', // Ensure you're applying the font family
          }}
        >
          AAHAAN
        </span>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
