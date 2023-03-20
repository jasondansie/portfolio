import React from 'react';
import classes from './Hero.module.css';
import PropTypes from 'prop-types';


const Hero = ({ imagePath, imageAlt, heroName, heroTitle }) => {
    return (
        <div className={classes.heroBox}>
            <img src={imagePath} alt={imageAlt} />
            <h1>{heroName}</h1>
            <h3>{heroTitle}</h3>
        </div>
    );
};

Hero.propTypes = {
    imagePath: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    heroName: PropTypes.string.isRequired,
    heroTitle: PropTypes.string.isRequired,
}


export default Hero;