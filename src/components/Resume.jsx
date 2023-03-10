import React, { useState } from 'react';
import classes from './Resume.module.css'
import ResumeJob from './ResumeJob';

const Resume = () => {
    const [ selection, setSelection] = useState("Fullstack");
    const careerList = require('../components/aboutpage/careerList.json');
    
    let filteredCareerList = [];
    
    const radioButtonHandler = (e) => {
        setSelection(e.target.value)
    }

    if (selection === "all") {
        filteredCareerList = careerList;
    }
    else{ 
        filteredCareerList = careerList.filter(career =>
            career.profile.includes(selection));
    }
    
    return (
        <div className={classes.resume}>
             <div className={classes.radioButtons}>
                <div>
                    <input key={"i1"} type="radio" name="contact" value="Fullstack" onChange={(e) => radioButtonHandler(e)} />
                    <label key={"l1"} htmlFor="fullstack">FullStack Developer</label>
                </div>
                <div>
                    <input key={"i2"} type="radio" name="contact" value="Game Programer"  onChange={(e) => radioButtonHandler(e)}/>
                    <label key={"l2"} htmlFor="Gamedeveloper">Game Developer</label>
                </div>
                <div>
                    <input key={"i3"} type="radio" name="contact" value="Entreprenuer" onChange={(e) => radioButtonHandler(e)} />
                    <label key={"l3"} htmlFor="entreprenuer">Entreprenuer</label>
                </div>
                <div>
                    <input key={"i4"} type="radio" name="contact" value="all" onChange={(e) => radioButtonHandler(e)}/>
                    <label key={"l4"} htmlFor="all">All</label>
                </div>   
            </div>
            <div className={classes.resumeInfo}>
                <div className={classes.leftSide}>
                    <h1>Resume</h1> 
                    <h2>Jason Dansie</h2>
                    <p>Hi I am a fullstack developer who has been doing
                            web development with PHP, HTML, CSS, MYSQL, Smarty Template and Bootstrap for over 8 years.                   
                    </p>
                    <p>
                        I am currently studying at Helsinki Business College in their fullstack developer course.
                        Specifically to update my skills to include Javascript, React, Node.js, Express and Typescript.
                    </p>
                    <p>
                        This site is build with these new technologies I have learned.
                        At the top you can choose which job profile you would like to see 
                        my experience for. 
                    </p>
                </div>
                <div className={classes.rightSide}>
                    
                    <a href="/contact">
                       
                       <span>Contact me</span> 
                    </a>
                    <a href="https://www.linkedin.com/in/jason-dansie-%F0%9F%91%BE-05729436/" target="_blank" rel="noreferrer">
                        <i class="fa fa-linkedin fa-xl"></i>
                        <span>@jasondansie</span>
                    </a>
                    <a href="https://github.com/jasondansie" target="_blank" rel="noreferrer">
                        <i class="fa fa-github fa-xl"></i>
                        <span>@jasondansie</span>
                    </a>

                
                </div>
            </div>
             

            <div className={classes.experience}>
                
                <h2>Experience</h2>
                {filteredCareerList.map((career, index) => {
                        return(
                            <div>
                                <hr />
                                <ResumeJob
                                    index={index}
                                    company={`${career.company}`}
                                    start={`${career.start}`}
                                    end={`${career.end}`}
                                    jobTitle={`${career.jobTitle}`}
                                    shortJobDescription={`${career.shortJobDescription}`}
                                    jobDescription= {`${career.jobDescription}`}
                                    challenges={`${career.challenges}`}
                                    technologies={`${career.technologies}`}
                                />                                  
                            </div>                       
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default Resume;