import React from 'react';
import './Nav.scss'
import NavLinks from './NavLinks'
import {BsSearch, BsGear} from 'react-icons/bs'
import navegationLinks from '../../../configs/navegation_links.json'



const NavJsx = props =>
    <nav id="app-nav" className="row">
        <div className="col-6 col-lg-3" id="nav-logo-container">
            <img id="nav-logo" src="http://demo.shrimpthemes.com/1/parlo/wp-content/uploads/2019/03/logo.png" alt="Parlo" />
        </div>
        <NavLinks links={navegationLinks} />
        <div className="col-6 col-lg-3" id="nav-icons-container">
            <BsSearch className="nav-icon"/>
            <BsGear className="nav-icon"/>
        </div>
    </nav>


export default NavJsx