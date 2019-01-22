import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from'./DropdownSection.css';

const dropdownSection = (props) => (
    <div className={[props.sideBar ? classes.SideBar : null, classes.DropdownSection, props.extender ? classes.Extender : null, props.items.length === 0 && props.extender ? classes.NoDisplay : null].join(' ')}>
        {props.sideBar && props.extender ? null : <Fragment><p className={classes.Title}>{props.extender ? 'Extender' : props.title}</p><hr/></Fragment>}
        <ul>
            {props.items.length === 0 ? props.extender ? null : <p className={classes.Label}>No posts avaliable.</p> : props.items.map(i => <li key={i.label}><NavLink exact to={i.to} activeClassName={classes.active}>{i.label}</NavLink></li>)}
        </ul>
    </div>
);

export default dropdownSection;