import React from 'react';
import { Link } from 'react-router-dom';

import ProjectItem from './ProjectItem/ProjectItem';
import classes from './ProjectArea.css'
import AreaHeader from '../AreaHeader/AreaHeader';
import Button from '../userInterfaces/Button/Button';
import Projects from '../../constants/projects';

const projectArea = (props) => (
    <section className={classes.ProjectArea}>
        <div>
            <AreaHeader>Featured Projects</AreaHeader>
            <div className={classes.Holder}>
                {Projects.map((i, index) => <ProjectItem name={i.name} description={i.description} image={i.image} link={i.link} key={index}/>)}
            </div>
            <Link to="/projects">
                <Button margin="46px 0 0 0" value="See More Projects!"/>
            </Link>
        </div>
    </section>
);

export default projectArea;