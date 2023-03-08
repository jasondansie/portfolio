import React from 'react';
import classes from './Footer.module.css'
import SocialLink from './SocialLink';

const Footer = () => {
    return (
        <footer>
            <div className={classes.footerCopyright}>
                <p><i className="fa-regular fa-copyright"></i> Jason Dansie</p>
            </div>
            <div className={classes.footerSocials}>
                <ul>
                    <li>
                        <SocialLink
                            socialLink={"https://www.linkedin.com/in/jason-dansie-%F0%9F%91%BE-05729436/"}
                            faIcon={"fa fa-linkedin fa-xl"}
                        />
                    </li>
                    <li>
                        <SocialLink
                            socialLink={"https://github.com/jasondansie"}
                            faIcon={"fa fa-github fa-xl"}
                        />
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;