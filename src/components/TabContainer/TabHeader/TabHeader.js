import React from 'react';

import classes from './TabHeader.css';

const tabHeader = (props) => (
    <div className={[classes.TabHeader, props.selected ? classes.Selected : null].join(' ')} onClick={props.click}>
        <span>{props.name}</span>
    </div>
);

export default tabHeader;