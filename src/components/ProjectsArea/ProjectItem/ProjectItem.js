import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ProjectItem.css'

const projectItem = (props) => (
    <Link to={props.link} className={classes.ProjectItem}>
        <img src={props.image} alt="Project" draggable={false}/>
        <div className={classes.Holder}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    </Link>
);

export default projectItem;