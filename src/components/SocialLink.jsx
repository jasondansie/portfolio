import React from 'react';
import PropTypes from 'prop-types';


const SocialLink = ({ socialLink, faIcon, linkName }) => {
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={socialLink}><i className={faIcon}></i><span>{linkName}</span> </a>
        </div>
    );
};

SocialLink.propTypes = {
    socialLink: PropTypes.string.isRequired,
    faIcon: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
}

export default SocialLink;