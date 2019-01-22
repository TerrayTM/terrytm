import React from 'react';
import { Animated } from 'react-animated-css';

import classes from './SkillItem.css';

const skillItem = (props) => {
    let stars = [];
    for (let i = 0; i < props.level; ++i) {
        stars.push(<div className={classes.Star} key={`${props.name} Star ${i}`}></div>);
    }
    return (
        <Animated animationIn="pulse" animationOut="fadeOut" className={[classes.SkillItem, props.display ? null : classes.AllowHover].join(' ')}>
            {props.display ? null : <div className={classes.Container}>{stars}</div>}
            <img src={props.icon} alt={props.name} draggable={false} style={{ width: props.size }}/>
            {props.display ? null : <p className={classes.Name}>{props.name}</p>}
            {props.display ? null : <p className={classes.Level}>{['', 'Basic', 'Intermediate', 'Advanced'][props.level]}</p>}
        </Animated>
    );
};

export default skillItem;