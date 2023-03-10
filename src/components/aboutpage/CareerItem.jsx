import React from 'react';
import classes from './CareerItem.module.css'

const CareerItem = ({careerLink, faIcon, companyAndJobDescription, companyAndDateAndTitle, index}) => {
    return (
        <div key={index} className={classes.careerLine}>
            <a key={index + 0.1}  href={`/careerinfo/${index}`}  rel="noreferrer" > 
                <div className={classes.jobInfo}>
                    <div className={classes.faIcon}>
                        <i key={index + .2} className={faIcon}></i>
                    </div>
                    <div className={classes.jobText}>
                        <div key={index + .3}>
                            {companyAndJobDescription}
                        </div>
                        <div key={index + .4}>
                            {companyAndDateAndTitle}
                        </div>    
                    </div>                      
                </div>            
            </a>
        </div>
    );
};

export default CareerItem;