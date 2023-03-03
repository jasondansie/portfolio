import React from 'react';
import AboutButton from './AboutButton';
import ContactButton from './ContactButton';
import Hero from './Hero';
import classes from './Home.module.css'

const Home = () => {
    return (
        <div>
          <Hero 
            imagePath={'../../images/jason.jpg'}
            imageAlt={'Jason Dansie'}
            heroName={'Jason Dansie'}
            heroTitle={'Fullstack Developer'}
          />
          <div className={classes.greyBlock} >
            greyBlock
          </div>
          <div className={classes.middleBlock} >
            middleBlock
          </div>
          <div className={classes.infoBlock}>
            <div className={classes.aboutBlock}>
                <AboutButton />
            </div> 
            <div className={classes.contactBlock}>
                <ContactButton />
            </div>
          </div>
        </div>
    );
};

export default Home;