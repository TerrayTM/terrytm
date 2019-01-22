import React from 'react';
import { Link } from 'react-router-dom';

import Tag from '../userInterfaces/Tag/Tag';
import classes from './FreelanceArea.css';

const freelanceArea = () => (
    <section className={classes.FreelanceArea}>
        <div>
            <div className={classes.Header}>
                <h2><span className={classes.DesktopOnly}>{'<'}</span> I do Freelancing Work! <span className={classes.DesktopOnly}>{'/>'}</span></h2>
            </div>
            <hr/>
            <p>I love taking on new projects! Need a website made? Hire me as your front-end and back-end developer! <Tag><Link to="/contact">Just send me a message.</Link></Tag></p>
        </div>
    </section>
);

export default freelanceArea;