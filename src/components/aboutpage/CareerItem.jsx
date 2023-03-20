import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CareerItem.module.css'

const CareerItem = ({ id, faIcon, companyAndJobDescription, companyAndDateAndTitle }) => {
    return (
        <div className={classes.careerLine}>
            <button>
                <NavLink to={`/careerinfo/${id}`}>
                    <div className={classes.jobInfo}>
                        <div className={classes.jobTextLeft}>
                            <div className={classes.faIcon}>
                                <i className={faIcon}></i>
                            </div>
                            <div>
                                {companyAndJobDescription}
                            </div>
                        </div>
                        <div className={classes.jobTextRight}>
                            <div>
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