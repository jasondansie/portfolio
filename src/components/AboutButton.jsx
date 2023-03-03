import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AboutButton.module.css'

const AboutButton = () => {
    return (
        <div>
            <div className={classes.blob_effect}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={classes.div_container}>
                        <button><NavLink to={'/about'}>{"About me"}</NavLink></button>
                    </div>
                </div>
        </div>
    );
};

export default AboutButton;