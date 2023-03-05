import React from 'react';
import classes from './FontAwesome.module.css'

const FontAwesome = ({ fa_Icon, fa_Name, index }) => {
    return (
        <div className={classes.FontAwesome}>
            <div className={classes.faIcon}>
                <i key={index} className={fa_Icon}></i>
            </div>
            <div className={classes.faName}>
                <h4 key={index}>{fa_Name}</h4>
            </div>
        </div>
    );
};

export default FontAwesome;