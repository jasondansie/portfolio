import React from 'react';
import classes from './CareerItem.module.css'

const CareerItem = ({careerLink, faIcon, companyAndJobDescription, companyAndDateAndTitle}) => {
    return (
        <div className={classes.careerLine}>
            <a href="http://"> 
                <div className={classes.jobInfo}>
                    <div className={classes.faIcon}>
                        <i className={faIcon}></i>
                    </div>
                    <div className={classes.jobText}>
                        <div>
                            {companyAndJobDescription}
                        </div>
                        <div>
                            {companyAndDateAndTitle}
                        </div>    
                    </div>                      
                </div>            
            </a>
        </div>
    );
};

export default CareerItem;