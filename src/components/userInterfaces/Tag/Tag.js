import React from 'react';

import classes from './Tag.css';

const tag = (props) => (
    <span className={[classes.Tag, props.dot ? classes.Dot : null].join(' ')}>
        {props.dot ? <div className={classes.Dot} style={{ backgroundColor: props.dot }}></div> : null}
        {props.children}
    </span>
);

export default tag;