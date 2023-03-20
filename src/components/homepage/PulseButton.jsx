import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './PulseButton.module.css'
import PropTypes from 'prop-types';


const PulseButton = ({ toLink, buttonNam }) => {
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

PulseButton.propTypes = {
    toLink: PropTypes.string.isRequired,
    buttonNam: PropTypes.string.isRequired,
}

export default PulseButton;