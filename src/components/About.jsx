import React from 'react';
import classes from './About.module.css'
import FontAwesome from './FontAwesome';

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
                <FontAwesome
                    fa_Icon={"fa-brands fa-react fa-2xl"}
                    fa_Name={"React"}
                />
                <FontAwesome
                    fa_Icon={"fa-solid fa-code"}
                    fa_Name={"Typescript"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-js fa-2xl"}
                    fa_Name={"Javascript"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-node fa-2xl"}
                    fa_Name={"Node.js"}
                />
                <FontAwesome
                    fa_Icon={"fa-solid fa-code"}
                    fa_Name={"Mysql"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-html5 fa-2xl"}
                    fa_Name={"HTML"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-css3 fa-2xl"}
                    fa_Name={"CSS"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-php fa-2xl"}
                    fa_Name={"PHP"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-docker fa-2xl"}
                    fa_Name={"Docker"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-aws fa-2xl"}
                    fa_Name={"AWS"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-square-github fa-2xl"}
                    fa_Name={"GitHub"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-jenkins fa-2xl"}
                    fa_Name={"Jenkins"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-wordpress fa-2xl"}
                    fa_Name={"Wordpress"}
                />
                <FontAwesome
                    fa_Icon={"fa-brands fa-figma fa-2xl"}
                    fa_Name={"Figma"}
                />
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