import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../userInterfaces/Button/Button';
import classes from './NavigationBar.css';
import Logo from '../../Logo/Logo';

const navigationBar = (props) => (
    <header className={classes.NavigationBar}>
        <Button click={props.sideMenuClick} type="SideBarButton" value="☰"/>
        <Logo/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default navigationBar;