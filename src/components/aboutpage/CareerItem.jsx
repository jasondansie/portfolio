import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CareerItem.module.css'
import PropTypes from 'prop-types';


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

CareerItem.propTypes = {
    id: PropTypes.string.isRequired,
    faIcon: PropTypes.string.isRequired,
    companyAndJobDescription: PropTypes.string.isRequired,
    companyAndDateAndTitle: PropTypes.string.isRequired,
}


export default CareerItem;