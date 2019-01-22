import React from 'react';

import ListItem from './ListItem/ListItem';
import classes from './ListContainer.css';

const listContainer = (props) => (
    <div className={classes.ListContainer}>
        {props.items.length === 0 ? <p>No posts avaliable. Check again later!</p> : props.items.map(i => <ListItem image={`***/${props.type}-content/${i.type.replace(/ /g, '-')}/${i.name.replace(/ /g, '-')}/1.png`} link={i.link} description={i.description} name={i.name} key={i.link}/>)}
    </div>
);

export default listContainer;