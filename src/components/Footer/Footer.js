import React from 'react';

import classes from './Footer.css'

const footer = () => (
    <footer className={classes.Footer}>
        <section className={classes.Head}>
        </section>
        <section className={classes.Tail}>
            <div>
            <p>Designed and Created with ♥</p>
            <p>Copyright &copy; Terry™ 2019</p>
            </div>
        </section>
    </footer>
);

export default footer;