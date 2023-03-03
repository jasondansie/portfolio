import React from 'react';
import classes from './Hero.module.css'

const Hero = ({imagePath, imageAlt, heroName, heroTitle}) => {
    return (
        <div className={classes.heroBox}>
            <img src={imagePath} alt={imageAlt} /> 
            <h1>{heroName}</h1>
            <h3>{heroTitle}</h3>
        </div>
    );
};

export default Hero;