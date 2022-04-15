
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icone/logo2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className='d-flex justify-content-between header'>
            <div ><img   src={logo} alt="logo"  /></div>
            <nav>
                <ul>
                  <li className='icone'><FontAwesomeIcon icon={faShoppingCart } /></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='sing-up'>Sing Up</Link></li>
                </ul>

            </nav>
        </div>
    );
};

export default Header;