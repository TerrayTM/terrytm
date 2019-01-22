import React from 'react';

import classes from './BlogItem.css';

const blogItem = (props) => (
    <a href={props.link} className={classes.Image}>
        <div style={{backgroundImage: `url(${props.source})`}}></div>
    </a>
);

export default blogItem