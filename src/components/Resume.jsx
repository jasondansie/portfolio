import React, { useState } from 'react';
import classes from './Resume.module.css'
import ResumeJob from './ResumeJob';
import SocialLink from './SocialLink';

const Resume = () => {
    const [selection, setSelection] = useState("Fullstack");
    const careerList = require('../components/aboutpage/careerList.json');

    let filteredCareerList = [];

    const radioButtonHandler = (e) => {
        setSelection(e.target.value)
    }

    if (selection === "all") {
        filteredCareerList = careerList;
    }
    else {
        filteredCareerList = careerList.filter(career =>
            career.profile.includes(selection));
    }

    return (
        <div className={classes.resume}>
            <div className={classes.radioButtons}>
                <div>
                    <input type="radio" name="contact" id='fullstack' value="Fullstack" onChange={(e) => radioButtonHandler(e)} />
                    <label htmlFor="fullstack">FullStack Developer</label>
                </div>
                <div>
                    <input type="radio" name="contact" id='Gamedeveloper' value="Game Programer" onChange={(e) => radioButtonHandler(e)} />
                    <label htmlFor="Gamedeveloper">Game Developer</label>
                </div>
                <div>
                    <input type="radio" name="contact" id='entreprenuer' value="Entreprenuer" onChange={(e) => radioButtonHandler(e)} />
                    <label htmlFor="entreprenuer">Entreprenuer</label>
                </div>
                <div>
                    <input type="radio" name="contact" id='all' value="all" onChange={(e) => radioButtonHandler(e)} />
                    <label htmlFor="all">All</label>
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

                    <a href="/contact"><span>Contact me</span></a>

                    <SocialLink
                        socialLink="https://www.linkedin.com/in/jason-dansie-%F0%9F%91%BE-05729436/"
                        faIcon="fa fa-linkedin fa-xl"
                        linkName="@jasondansie"
                    />
                    <div className={classes.sociallink}>
                        <SocialLink
                            socialLink="https://github.com/jasondansie"
                            faIcon="fa fa-github fa-xl"
                            linkName="@jasondansie"
                        />
                    </div>

                </div>
            </div>


            <div className={classes.experience}>

                <h2>Experience</h2>
                {filteredCareerList.map((career, index) => {
                    return (
                        <div key={career.id}>
                            <hr />
                            <ResumeJob
                                company={`${career.company}`}
                                start={`${career.start}`}
                                end={`${career.end}`}
                                jobTitle={`${career.jobTitle}`}
                                shortJobDescription={`${career.shortJobDescription}`}
                                jobDescription={`${career.jobDescription}`}
                                challenges={`${career.challenges}`}
                                technologies={`${career.technologies}`}
                            />
                        </div>
                    )
                })
                }
            </div>
            <div className={classes.references}>
                <hr />
                <h2>Reference</h2>
                <div className={classes.referenceList}>
                    <div className={classes.singleReference}>
                        <h3>Margit Tennosaar, Teacher</h3>
                        <h3>Helsinki Business College</h3>
                        <h3>margit.tennosaar@bc.fi</h3>
                    </div>
                    <div className={classes.singleReference}>
                        <h3>Santosh Kalwar, Teacher</h3>
                        <h3>Helsinki Business College</h3>
                        <h3>santosh.kalwar@bc.fi</h3>
                        <h3>GSM: +358 447 756 412 </h3>
                    </div>
                    <div className={classes.singleReference}>
                        <h3>Janne Huhtanen, Project Manager</h3>
                        <h3>NextGames</h3>
                        <h3>Janne.huhtanen@nextgames.com</h3>
                        <h3>GSM: +358 040 575 9792 </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;