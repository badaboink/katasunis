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
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            KATAŠUNIS
            <i class='fas fa-dog' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
            <li className='nav-item'>
              <Link
                to='/paslaugos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Paslaugos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/prekes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prekės
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/uzsakymai'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Užsakymai
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rezervacijos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rezervacijos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profilis'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fas fa-user-alt' />
              </Link>
            </li>
            <li>
              <Link
                to='/prisijungimas'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Prisijungti
              </Link>
            </li>
          </ul>
          {button && <div className='nav-item'>
              <Link to='/krepselis' 
              className='nav-links' 
              onClick={closeMobileMenu}>
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              </Link>
            </div>}
         
            {button && <Button buttonStyle='btn--outline'>PRISIJUNGTI</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
