import React from 'react';
import classes from './FontAwesome.module.css'

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

export default FontAwesome;