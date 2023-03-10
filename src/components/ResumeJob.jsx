import React from 'react';
import classes from './ResumeJob.module.css'

const ResumeJob = ({jobTitle, company, shortJobDescription, jobDescription, start, end, challenges, technologies}) => {
    return (
        <div className={classes.jobInfo}>
            <div className={classes.leftSide}>
                <h2>{company} ({start} - {end})</h2>
                <h3>{jobTitle} - {shortJobDescription}</h3>
                <p>{jobDescription}</p>
            </div>
            <div className={classes.container}>            
            </div>
            <div className={classes.rightSide}>
                <div className={classes.challenges}>
                    {!challenges ? "" :
                        <div>
                        <div className={classes.strongChallenge}> <strong> Design Challenges</strong> </div> 
                            <p>{challenges}</p>
                        </div>  
                    }
                </div>
                <div className={classes.techAndInfo}>
                    {!technologies ? "" : <p> <strong>Primary Tech and Tools</strong>  </p>} 
                
                    <div className={technologies}>
                        <p> 
                            {technologies}
                        </p>
                    </div>
                    
                </div>        
            </div>      
        </div> 
    );
};

export default ResumeJob;