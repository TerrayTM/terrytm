import React from 'react';

import TabContainer from '../TabContainer/TabContainer';
import Programming from '../../constants/programming';
import classes from './SkillsArea.css';
import AreaHeader from '../AreaHeader/AreaHeader';

const skillsArea = (props) => (
    <section className={classes.SkillsArea}>
        <div>
            <AreaHeader noLine>Experience</AreaHeader>
            <TabContainer items={Programming}/>
        </div>
    </section>
);

export default skillsArea;