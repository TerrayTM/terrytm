import React from 'react';

import Form from '../Form/Form';
import classes from './ContactArea.css';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import Spinner from '../userInterfaces/Spinner/Spinner';
import Success from '../../assets/images/userInterfaces/check.png';
import AreaHeader from '../AreaHeader/AreaHeader';
import ContactControls from '../../constants/contactControls';

const contactArea = (props) => {
    let element = <Form controls={ContactControls} submit={props.submit} submitLabel="Send Message"/>;
    if (props.success) {
        element = (
            <div className={classes.Success} onClick={props.close}>
                <img src={Success} alt="Success"/>
                <p>Thank you for your message! I will get back to you as soon as possible.</p>
            </div>
        );
    } else if (props.loading) {
        element = <Spinner/>;
    }
    return (
        <section className={classes.ContactArea}>
            <div>
                <AreaHeader>Contact Me</AreaHeader>
                {props.error ? <ErrorHandler error={<p>An error has occurred. Please try again later.</p>} resetError={props.reset}/> : null}
                {element}
            </div>
        </section>
    );
};

export default contactArea;