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
    socialLink: PropTypes.string,
    faIcon: PropTypes.string,
    linkName: PropTypes.string,
}

export default SocialLink;