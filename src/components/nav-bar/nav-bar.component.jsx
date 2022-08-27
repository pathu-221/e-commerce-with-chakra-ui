import React from 'react';
import logo  from '../../assets/logo2.jpg';

import {Link } from 'react-router-dom';
import { signout } from '../../firebase/firebase.utils';

import './nav-bar.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
function NavBar({currentUser}){

  return (
    <div className='nav-container'>
        <div className="logo">
        <Link to={'/'}>
          <img src={logo} alt="" className='logo-image'/>
        </Link>
          
        </div>
        <div className="nav-links-container">
            <ul className='links'>
                <li>
                  <Link to={'/products'}>Products</Link>
                </li>

                <li>About us</li>
                {/* <li >
                {
                  currentUser ? 
                  'Sign Out' :
                }
                </li> */}
                {
                  currentUser ? <li onClick={signout}>Sign Out</li> :
                                <li>
                                   <Link to={'/signin'}>SignIn</Link>
                                </li>
                }
                <li>
                  <CartIcon />
                </li>
            </ul>
        </div>
    </div>
  )
}


export default NavBar;