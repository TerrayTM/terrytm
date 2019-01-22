import React, { Component } from 'react';

import ListContainer from '../../components/ListContainer/ListContainer';
import ErrorPage from '../ErrorPage/ErrorPage';
import Spinner from '../../components/userInterfaces/Spinner/Spinner';
import AreaHeader from '../../components/AreaHeader/AreaHeader';
import classes from './AllContent.css';

class AllContent extends Component {
    state = {
        list: null
    }

    fetchData = async () => {
        this.setState({ list: null });
        try {
            let response = await fetch(`***type=${this.props.type}&list=true`);
            response = await response.json();
            if (!response || response.error) {
                this.setState({ list: 'ERROR_BAD_FILE' });
                return;
            }
            this.setState({ list: response });
        } catch (error) {
            this.setState({ list: 'ERROR_BAD_FILE' });
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.fetchData();
        }
    }

    render() {
        let element = <div className={classes.SpinnerHolder}><Spinner/></div>;
        if (this.state.list) {
            if (this.state.list === 'ERROR_BAD_FILE') {
                element = <ErrorPage/>;
            } else {
                element = (
                    <section className={classes.Content}>
                        <div>
                            <AreaHeader>{this.props.type === 'projects' ? 'All Projects' : 'All Blog Entries'}</AreaHeader>
                            <ListContainer items={this.state.list} type={this.props.type}/>
                        </div>
                    </section>
                );
            }
        }
        return element;
    }
}

export default AllContent;