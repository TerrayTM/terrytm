import React from 'react';

import classes from './TabHolder.css';

const tabHolder = (props) => (
    <div className={[classes.TabHolder, props.show ? classes.Show : null].join(' ')}>
        {props.items.map((i, index) => <props.type {...i.props} key={`TabHolder ${index}`}/>)}
    </div>
);

export default tabHolder;