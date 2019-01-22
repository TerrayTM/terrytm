import React from 'react';

import classes from './AdjectiveItem.css';

const adjectiveItem = (props) => (
    <h2 className={classes.Item}>{props.value}</h2>
);

export default adjectiveItem;