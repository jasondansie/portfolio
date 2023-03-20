import React from 'react';

const SocialLink = ({ socialLink, faIcon, linkName }) => {
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={socialLink}><i className={faIcon}></i><span>{linkName}</span> </a>
        </div>
    );
};

export default SocialLink;