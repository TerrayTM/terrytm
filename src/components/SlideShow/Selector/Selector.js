import React from 'react';

import classes from './Selector.css';

const selector = (props) => (
    <div className={[classes.Selector, props.selected ? classes.Selected : null].join(' ')} onClick={props.click} style={{ backgroundImage: `url(${props.item})` }}></div>
);

export default selector;