import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CirclingButton.module.css';
import PropTypes from 'prop-types';


const CirclingButton = ({ toLink, buttonName }) => {
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

CirclingButton.propTypes = {
    toLink: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
}

export default CirclingButton;