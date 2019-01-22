import React, { Component, Fragment } from 'react';

import ContactArea from '../../components/ContactArea/ContactArea';
import HeroArea from '../../components/HeroArea/HeroArea';
import Tag from '../../components/userInterfaces/Tag/Tag';
import classes from './Contact.css';

class Contact extends Component {
    state = {
        loading: false,
        error: null,
        success: false
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    submitForm = async (data) => {
        this.setState({ loading: true, error: null, success: false });
        const content = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message
            }) 
        };
        try {
            let response = await fetch('***', content);
            response = await response.json();
            if (response.status && response.status === 'SUCCESS') {
                this.setState({ success: true, loading: false });
            } else {
                this.setState({ error: response.error, loading: false });
            }
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    render() {
        return (
            <Fragment>
                <HeroArea color="#36ACDB">
                    <h1 className={classes.Header}>Contact Me!</h1>
                    <h2 className={classes.Header}>Send me a message...</h2>
                    <p className={classes.Header}>Or email me at <Tag><a href="mailto:contact@terrytm.com">contact@terrytm.com</a></Tag>!</p>
                </HeroArea>
                <ContactArea close={() => this.setState({ success: false })} submit={this.submitForm} loading={this.state.loading} success={this.state.success} error={this.state.error} reset={() => this.setState({ error: null })}/>
            </Fragment>
        );
    } 
}

export default Contact;