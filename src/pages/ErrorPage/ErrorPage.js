import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import classes from './ErrorPage.css';
import Button from '../../components/userInterfaces/Button/Button';
import { invalidPage } from '../../helpers/analytics';

const errorPage = (props) => {
    invalidPage(props.location.pathname);
    return (
        <section className={classes.Error}>
            <div>
                <h1>404</h1>
                <h2>The page you are requesting<br className={classes.MobileOnly}/> cannot be found.</h2>
                <Link to="/">
                    <Button color="blue" value="Go To Homepage"/>
                </Link>
            </div>
        </section>
    );
};

export default withRouter(errorPage);