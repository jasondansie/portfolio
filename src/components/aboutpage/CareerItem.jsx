import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CareerItem.module.css'

const CareerItem = ({ id, faIcon, companyAndJobDescription, companyAndDateAndTitle, index }) => {
    return (
        <div key={index} className={classes.careerLine}>
            <button key={index + 0.1} >
                <NavLink to={`/careerinfo/${id}`}>
                    <div key={index + 0.7} className={classes.jobInfo}>
                        <div className={classes.jobTextLeft}>
                            <div key={index + 0.5} className={classes.faIcon}>
                                <i key={index + .2} className={faIcon}></i>
                            </div>
                            <div key={index + .3}>
                                {companyAndJobDescription}
                            </div>
                        </div>
                        <div key={index + 0.6} className={classes.jobTextRight}>
                            <div key={index + .4}>
                                {companyAndDateAndTitle}
                            </div>
                        </div>
                    </div>
                </NavLink>
            </button>
        </div>
    );
};

export default CareerItem;