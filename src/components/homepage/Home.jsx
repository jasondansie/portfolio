import React from 'react';
import AboutButton from './AboutButton';
import ContactButton from './ContactButton';
import Hero from './Hero';
import classes from './Home.module.css'
import ProjectCard from './ProjectCard';

const Home = () => {
  const projects = require('./projectList.json');
  return (
    <div>
      <Hero
        imagePath={'../../images/jason.jpg'}
        imageAlt={'Jason Dansie'}
        heroName={'Jason Dansie'}
        heroTitle={'Fullstack Developer'}
      />
      <div className={classes.greyBlock} >
        {
          projects.map((project, index) => {
            return (
                <ProjectCard
                  index={index}
                  porjectTitle={project.title}
                  imagePath={project.imagePath}
                  ProjectInfo= {project.info}
                  liveLink={project.livelink}
                  faIcon={project.faIcon}
                  githubLink={project.githublink}
              />
            )
          })
        }
       
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