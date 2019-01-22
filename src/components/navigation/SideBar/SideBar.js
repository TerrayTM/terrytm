import React, { Fragment } from 'react';

import Backdrop from '../../userInterfaces/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideBar.css'
import Logo from '../../Logo/Logo';
import Button from '../../userInterfaces/Button/Button';

const sideBar = (props) => (
    <Fragment>
        <Backdrop click={props.close} show={props.show}/>
        <div className={[props.show ? classes.Show : '', classes.SideBar].join(' ')}>
            <nav>
                <div>
                    <div className={classes.Head}>
                        <Button click={props.sideMenuClick} type="SideBarButton" value="☰"/>
                        <Logo/>
                    </div>
                    <NavigationItems sideBar/>
                </div>
                <div className={classes.Footer}>
                    <p>Designed and Created with ♥</p>
                    <p>Copyright &copy; Terry™ 2018</p>
                </div>
            </nav>
        </div>
    </Fragment>
);

export default sideBar;