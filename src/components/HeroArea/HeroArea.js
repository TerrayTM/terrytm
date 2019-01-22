import React from 'react';

import classes from './HeroArea.css';

const heroArea = (props) => (
    <section className={classes.HeroArea} style={{backgroundColor: props.color ? props.color : '', backgroundImage: props.image ? `url(${props.image})` : ''}}>
        <div>
            {props.children}
        </div>
    </section>
);

export default heroArea;