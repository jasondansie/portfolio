import React from 'react';
import classes from './ProjectCard.module.css'
import SocialLink from '../SocialLink';
import PropTypes from 'prop-types';


const ProjectCard = ({ porjectTitle, ProjectInfo, imagePath, liveLink, liveLinkName, githubLink, faIcon }) => {
    return (
        <div className={classes.ProjectCard}>
            <h3>{porjectTitle}</h3>
            <img src={imagePath} alt={porjectTitle} />
            <p>{ProjectInfo}</p>
            <h5>Live Demo: <a href={liveLink} rel="noreferrer" target="_blank">{liveLinkName}</a></h5>
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

ProjectCard.propTypes = {
    porjectTitle: PropTypes.string.isRequired,
    ProjectInfo: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    faIcon: PropTypes.string.isRequired,

}

export default ProjectCard;