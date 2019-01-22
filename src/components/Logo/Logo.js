import React from 'react';

import LogoImage from '../../assets/images/userInterfaces/logo.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={LogoImage} draggable={false} alt="Logo"/>
        <h3>Terry™</h3>
    </div>
);

export default logo;