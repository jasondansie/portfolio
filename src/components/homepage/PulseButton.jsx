import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './PulseButton.module.css'

const PulseButton = ({toLink, buttonNam}) => {
    return (
        <div>
            <div className={classes.pulse_effect}>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <button><NavLink to={toLink}>{buttonNam}</NavLink></button>
            </div>           
        </div>
    );
};

export default PulseButton;