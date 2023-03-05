import React from 'react';
import classes from './About.module.css'
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
                        web development for over 8 years.
                    </p>
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
            <div className={classes.projects}>
                <div className={classes.projects}>
                    <p>Something should go here</p>
                </div>
                <div className={classes.projects}>
                    <p>Something should go here</p>
                </div>
                <div className={classes.projects}>
                    <p>Something should go here</p>
                </div>
            </div>
        </div>
    );
};

export default About;