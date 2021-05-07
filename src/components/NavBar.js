import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import { Button } from './Button'
import PhotolemonIcon from '../images/photolemon.svg'


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
            <nav className='navbar' >
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src={ PhotolemonIcon } alt=""/>Lemon
                    </Link>
                    <div className='menu-icon' onClick={ handleClick }>
                        <i className= { click ? 'fa fa-times' : 'fa fa-bars' }></i>
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tutorials' className='nav-links' onClick={ closeMobileMenu }>
                                Tutorials
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/download' className='nav-links' onClick={ closeMobileMenu }>
                                Get Volto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )

}

export default Navbar;