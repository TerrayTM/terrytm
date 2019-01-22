import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ListItem.css';

const listItem = (props) => (
    <Link to={props.link} className={classes.Link}>
        <div className={classes.ListItem} style={{ backgroundImage: `url(${props.image})` }}>
            <div>
                <h6>{props.name}</h6>
                <p>{props.description.length > 120 ? `${props.description.substring(0, 117)}...` : props.description}</p>
            </div>
        </div>
    </Link>
);

export default listItem;