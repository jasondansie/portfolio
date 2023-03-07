import React from 'react';
import classes from './ProjectCard.module.css'
import SocialLink from '../SocialLink'

const ProjectCard = ({porjectTitle, ProjectInfo, imagePath,liveLink, githubLink, faIcon, index}) => {
    return (
        <div key={index} className={classes.ProjectCard}>
            <h3>{porjectTitle}</h3>
            <img src={imagePath} alt={porjectTitle} />
            <p>{ProjectInfo}</p>
            <h5>Live Demo: <a href={liveLink} rel="noreferrer" target="_blank">{porjectTitle}</a></h5>
           <div className={classes.githubInfo}>
            <SocialLink
                socialLink={githubLink}
                faIcon={faIcon}
            />
            <a href={githubLink} rel="noreferrer" target="_blank">{porjectTitle}</a>
           </div>
        </div>
    );
};

export default ProjectCard;