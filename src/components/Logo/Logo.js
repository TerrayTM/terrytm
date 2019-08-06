import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../assets/images/userInterfaces/logo.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <Link to="/">
            <img src={LogoImage} draggable={false} alt="Logo" />
            <h3>Terry™</h3>
        </Link>
    </div>
);

export default logo;