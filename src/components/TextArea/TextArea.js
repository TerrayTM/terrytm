import React from 'react';

import classes from './TextArea.css';
import AreaHeader from '../AreaHeader/AreaHeader';

const textArea = (props) => (
    <section className={classes.TextArea}>
        <div>
            <AreaHeader>{props.title}</AreaHeader>
            <p>{props.children}</p>
        </div>
    </section>
);

export default textArea;