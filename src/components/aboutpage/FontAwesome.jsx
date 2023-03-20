import React from 'react';
import classes from './FontAwesome.module.css';
import PropTypes from 'prop-types';


const FontAwesome = ({ fa_Icon, fa_Name }) => {
    return (
        <div className={classes.FontAwesome}>
            <span className={classes.faIcon}>
                <i className={fa_Icon}></i>
            </span>
            <div className={classes.faName}>
                <h4>{fa_Name}</h4>
            </div>
        </div>
    );
}

FontAwesome.propTypes = {
    fa_Icon: PropTypes.string.isRequired,
    fa_Name: PropTypes.string.isRequired,
}

export default FontAwesome;