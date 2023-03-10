import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './CareerInfo.module.css'

const CareerInfo = () => {
    const params = useParams();
    const careerList = require('./aboutpage/careerList.json');
    const careeritem = careerList[params.id];
    return (
        <div className={classes.careerInfo}>
            <div className={classes.container}>
                <h1>{careeritem.company} - {careeritem.shortJobDescription}</h1>
                <h2>{careeritem.company} - {careeritem.jobTitle} [ {careeritem.start} - {careeritem.end} ]</h2>
                <p><span>{careeritem.jobDescription}</span></p> 

                <div className={classes.challenges}>
                    {!careeritem.challenges ? "" :
                        <div>
                           <div className={classes.strongChallenge}> <strong> Design Challenges</strong> </div> 
                            <p>{careeritem.challenges}</p>
                        </div>  
                    }
                </div>
                <div className={classes.techAndInfo}>
                    {!careeritem.technologies ? "" : <p>Primary Tech and Tools </p>} 
                
                    <p> 
                    {careeritem.technologies}
                    </p>
                </div>           
            </div>
        </div>      
    );
};

export default CareerInfo;