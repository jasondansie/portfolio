import React from 'react';
import classes from './CareerItem.module.css'

const CareerItem = ({careerLink, faIcon, companyAndJobDescription, companyAndDateAndTitle, index}) => {
    return (
        <div key={index} className={classes.careerLine}>
            <a key={index + 0.1}  href={`/careerinfo/${index}`}  rel="noreferrer" > 
                <div key={index + 0.7} className={classes.jobInfo}>
                    <div key={index + 0.5} className={classes.faIcon}>
                        <i key={index + .2} className={faIcon}></i>
                    </div>
                    <div key={index + 0.6} className={classes.jobText}>
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