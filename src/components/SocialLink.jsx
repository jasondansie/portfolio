import React from 'react';

const SocialLink = ({socialLink, faIcon}) => {
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={socialLink}><i className={faIcon}></i> </a>
        </div>
    );
};

export default SocialLink;