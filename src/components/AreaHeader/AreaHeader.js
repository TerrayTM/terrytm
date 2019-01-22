import React, { Fragment } from 'react';

import classes from './AreaHeader.css';

const areaHeader = (props) => (
    <Fragment>
        <h2 className={classes.Heading}>{props.children}</h2>
        {props.noLine ? null : <hr className={classes.Line}/>}
    </Fragment>
);

export default areaHeader;