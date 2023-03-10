import React from 'react';
import classes from './FontAwesome.module.css'

const FontAwesome = ({ fa_Icon, fa_Name, index }) => {
    return (
        <div key={index + .01} className={classes.FontAwesome}>
            <span className={classes.faIcon}>
                <i key={index + .02} className={fa_Icon}></i>
            </span>
            <div key={index + .03} className={classes.faName}>
                <h4 key={index + .04}>{fa_Name}</h4>
            </div>
        </div>
    );
}

export default FontAwesome;