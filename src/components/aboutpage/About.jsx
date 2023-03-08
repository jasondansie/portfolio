import React from 'react';
import SocialLink from '../SocialLink';
import classes from './About.module.css'
import CareerItem from './CareerItem';
import FontAwesome from './FontAwesome';


let faIcons = require('./fontawesomeIcons.json');

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.sideBySide}>
                <div className={classes.leftSide}>
                    <img src="../../images/logo.png" alt="Jason" />
                </div>
                <div className={classes.rightSide}>
                    <h1>Jason Dansie</h1>
                    <p>Hi I am a fullstack developer who has been doing
                        web development with PHP, HTML, CSS, MYSQL, Smarty Template and Bootstrap for over 8 years. 
                        I am currently studying at Helsinki Business College in their fullstack developer course.
                        Specifically to update my skills to include Javascript, React, Node.js, Express and Typescript.
                        This site is build with these new technologies I have learned.
                        Please check out my profiles below.
                    </p>
                    <div className={classes.profiles}>                      
                         <a 
                         target="_blank" 
                         rel="noreferrer" 
                         href={"https://github.com/jasondansie"}>
                            <FontAwesome
                                index={100}
                                fa_Icon={"fa-brands fa-square-github fa-2xl"}
                                fa_Name={"Github"}
                            /> 
                        </a>
                         <a 
                         target="_blank" 
                         rel="noreferrer" 
                         href={"https://www.linkedin.com/in/jason-dansie-%F0%9F%91%BE-05729436/"}>
                            <FontAwesome
                                index={101}
                                fa_Icon={"fa-brands fa-linkedin fa-2xl"}
                                fa_Name={"LinkedIn"}
                            /> 
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.tech}>
                    <h2>Technologies</h2>
                </div>
                {
                    faIcons.map((fa, i) => {
                        return (
                            <FontAwesome
                                index={i}
                                fa_Icon={fa.icon}
                                fa_Name={fa.name}
                            />
                        )
                    })
                }

            </div>
            <div className={classes.career}>
                <div className={classes.careerInfo}>
                <h2>Career</h2>
                <hr />
                <CareerItem
                    faIcon={"fa-sharp fa-solid fa-file-lines"}
                    companyAndJobDescription={'Goodcall - Build website and tech infostructer'}
                    companyAndDateAndTitle= {'Goodcall 2017 - present Cheif Technical Officer'}
                />  
                <CareerItem
                    faIcon={"fa-sharp fa-solid fa-file-lines"}
                    companyAndJobDescription={'Goodcall - Build website and tech infostructer'}
                    companyAndDateAndTitle= {'Goodcall 2017 - present Cheif Technical Officer'}
                />  
                <CareerItem
                    faIcon={"fa-sharp fa-solid fa-file-lines"}
                    companyAndJobDescription={'Goodcall - Build website and tech infostructer'}
                    companyAndDateAndTitle= {'Goodcall 2017 - present Cheif Technical Officer'}
                />  
                <CareerItem
                    faIcon={"fa-sharp fa-solid fa-file-lines"}
                    companyAndJobDescription={'Goodcall - Build website and tech infostructer'}
                    companyAndDateAndTitle= {'Goodcall 2017 - present Cheif Technical Officer'}
                />   
                <CareerItem
                    faIcon={"fa-sharp fa-solid fa-file-lines"}
                    companyAndJobDescription={'Goodcall - Build website and tech infostructer'}
                    companyAndDateAndTitle= {'Goodcall 2017 - present Cheif Technical Officer'}
                />  
                <CareerItem
                    faIcon={"fa-sharp fa-solid fa-file-lines"}
                    companyAndJobDescription={'Goodcall - Build website and tech infostructer'}
                    companyAndDateAndTitle= {'Goodcall 2017 - present Cheif Technical Officer'}
                />  
                
                </div>
            </div>
        </div>
    );
};

export default About;