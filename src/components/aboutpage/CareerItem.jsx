import React from 'react';
import classes from './CareerItem.module.css'

const CareerItem = ({careerLink, faIcon, companyAndJobDescription, companyAndDateAndTitle, index}) => {
    return (
        <div key={index} className={classes.careerLine}>
            <a  href={`/careerinfo/${index}`}  rel="noreferrer" > 
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