import React from 'react';

import classes from './ActivityItem.css'

const activityItem = (props) => (
    <div className={classes.Item}>
        <a href={props.link} className={classes.Link} target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt="Activity"/>
        </a>
        <div>
            <h4 className={classes.Header}>{props.name}</h4>
            <p className={classes.Description}>{props.description}</p>
        </div>
    </div>
);

export default activityItem;