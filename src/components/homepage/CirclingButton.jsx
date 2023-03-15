import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CirclingButton.module.css'

const CirclingButton = ({toLink, buttonName}) => {
    return (
        <div className={classes.circleingButton}>
            <div className={classes.blob_effect}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={classes.div_container}>
                        <button><NavLink to={toLink}>{buttonName}</NavLink></button>
                    </div>
                </div>
        </div>
    );
};

export default CirclingButton;