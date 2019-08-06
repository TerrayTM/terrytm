import React, { Component } from 'react';

import Spinner from '../../components/userInterfaces/Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';
import Tag from '../../components/userInterfaces/Tag/Tag';
import classes from './Blog.css';

class Blog extends Component {
    state = {
        content: null,
        tags: null
    }

    assertProps = (compare) => {
        return compare.match && compare.match.params && compare.match.params.category && compare.match.params.name;
    }
    
    fetchData = async () => {
        this.setState({ content: null });
        if (this.assertProps(this.props)) {
            try {
                let response = await fetch(`https://terrytm.com/services/rest_api.php?type=blog&category=${this.props.match.params.category}&post=${this.props.match.params.name}`);
                response = await response.json();
                if (!response || response.error) {
                    this.setState({ content: 'ERROR_BAD_FILE' });
                    return;
                }
            }
            catch (error) {
               this.setState({ content: 'ERROR_BAD_FILE' });
            }
        } else {
            this.setState({ content: 'ERROR_BAD_FILE' });
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.assertProps(this.props)) {
            if (this.assertProps(prevProps)) {
                if (prevProps.match.params.category !== this.props.match.params.category || prevProps.match.params.name !== this.props.match.params.name) {
                    this.fetchData();
                }
            } else {
                this.fetchData();
            }
        }
    }

    render() {
        let element = <div className={classes.SpinnerHolder}><Spinner/></div>;
        if (this.state.content) {
            if (this.state.content === 'ERROR_BAD_FILE') {
                element = <ErrorPage/>;
            } else {
                element = (
                    <section className={classes.Content}>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                            <hr className={classes.Separator}/>
                            <div className={classes.TagArea}>{this.state.tags ? this.state.tags.map(i => <Tag>{i}</Tag>) : null}</div>
                        </div>
                    </section>
                );
            }
        }
        return element;
    }
}

export default Blog;