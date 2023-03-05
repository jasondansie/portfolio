import React from 'react';
import classes from './Loading.module.css'

const Loading = () => {
    return (
        <div className={classes.loading}>
            <h2 loading-text="Loading...">Loading...</h2>
        </div>
    );
};

export default Loading;