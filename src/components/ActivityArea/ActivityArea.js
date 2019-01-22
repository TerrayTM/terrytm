import React from 'react';

import AreaHeader from '../AreaHeader/AreaHeader';
import ActivityItem from './ActivityItem/ActivityItem';
import classes from './ActivityArea.css';
import Activites from '../../constants/activities';

const activityArea = (props) => (
    <section className={classes.ActivityArea}>
        <div>
            <AreaHeader>Extracurriculars</AreaHeader>
            {Activites.map((i, index) => <ActivityItem name={i.name} description={i.description} image={i.image} link={i.link} key={index}/>)}
        </div>
    </section>
);

export default activityArea;