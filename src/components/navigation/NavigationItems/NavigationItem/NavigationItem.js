import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={[classes.NavigationItem, props.sideBar ? classes.SideBar : null].join(' ')}>
        <NavLink className={classes.LinkElement} to={props.to} activeClassName={classes.active} exact={props.exact}>
            <img className={classes.Icon} src={props.icon} draggable={false} alt=""/>
            <span>{props.children}</span>
        </NavLink>
    </li>
);

export default navigationItem;