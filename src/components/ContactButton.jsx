import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ContactButton.module.css'

const ContactButton = () => {
    return (
        <div>
            <div className={classes.pulse_effect}>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <button><NavLink to={'/contact'}>{"Contact me"}</NavLink></button>
            </div>           
        </div>
    );
};

export default ContactButton;