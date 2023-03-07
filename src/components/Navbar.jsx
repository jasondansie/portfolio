import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = ({imagePath, logoName}) => {

    return (
        <div className={classes.navBar}>
            <div className={classes.navLogo}>
                <NavLink to={'/'}><img src={imagePath} alt={logoName} /></NavLink>
            </div>
            <div className={classes.navMenu}>
                <ul>
                    <li><NavLink to={'/'}>{"Home"}</NavLink></li>
                    <li><NavLink to={'/about'}>{"About"}</NavLink></li>
                    <li><NavLink to={'/resume'}>{"Resume"}</NavLink></li>
                    <li><NavLink to={'/contact'}>{"Contact me"}</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;