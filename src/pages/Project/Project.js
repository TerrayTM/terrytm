import React, { Component, Fragment } from 'react';

import Spinner from '../../components/userInterfaces/Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';
import SlideShow from '../../components/SlideShow/SlideShow';
import classes from './Project.css';
import SkillItem from '../../components/SkillsArea/SkillItem/SkillItem';
import Tag from '../../components/userInterfaces/Tag/Tag';
import Button from '../../components/userInterfaces/Button/Button';
import * as Languages from '../../constants/languages';

class Project extends Component { 
    state = {
        title: null,
        creator: null,
        date: null,
        content: null,
        images: null,
        current: null,
        technologies: null,
        tags: null,
    }

    assertProps = (compare) => {
        return compare.match && compare.match.params && compare.match.params.category && compare.match.params.name;
    }
    
    fetchData = async () => {
        this.setState({ content: null });
        if (this.assertProps(this.props)) {
            try {
                const category = this.props.match.params.category;
                const post = this.props.match.params.name;
                let response = await fetch(`https://terrytm.com/services/rest_api.php?type=projects&category=${category}&post=${post}`);
                response = await response.json();
                if (!response || response.error) {
                    this.setState({ content: 'ERROR_BAD_FILE' });
                    return;
                }
                const images = [];
                for (let i = 1; i <= response.number; ++i) {
                    images.push(`https://terrytm.com/content/projects-content/${category}/${post}/${i}.png`);
                }
                this.setState({
                    title: response.name,
                    creator: response.creator,
                    date: response.date,
                    content: response.description,
                    current: images[0],
                    link: response.link,
                    range: 0,
                    images,
                    technologies: response.technology.split(' '),
                    tags: response.tag.split('|')
                });
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
                    <section className={classes.Project}>
                        <div>
                            <h1 className={classes.Name}>{this.state.title}</h1>
                            <p className={classes.Author}>{this.state.creator}</p>
                            <p className={classes.Date}>{this.state.date}</p>
                            <hr/>
                            <div className={classes.Content}>
                                <SlideShow current={this.state.current} click={(image) => this.setState({ current: image })} images={this.state.images}/>
                                <div className={classes.Description}>
                                    <div>
                                        <h2>Description</h2>
                                        <hr/>
                                        <p style={{ fontSize: this.state.content.length > 330 ? '12px' : null, lineHeight: this.state.content.length > 330 ? '20px' : null }}>{this.state.content}</p>
                                    </div>
                                    <div>
                                        <h2>{this.state.technologies.length > 1 ? 'Technologies' : 'Technology'}</h2>
                                        <hr/>
                                        <div className={classes.Grid} style={{ gridTemplateColumns: this.state.technologies.reduce((total, current , i) => i > 3 ? total : `${total} 1fr`, '') }}>
                                            {this.state.technologies.map((i, index) => <SkillItem icon={Languages[i]} display size="46px" key={`Skill ${index}`}/>)}
                                        </div>
                                    </div>
                                    <div>
                                        {this.state.link ? <Fragment><hr/><Button color="dodgerblue" margin="8px 0" value="☆ View it Live ☆" click={() => window.location = this.state.link}/></Fragment> : null}
                                        <hr/>
                                        <div className={classes.TagHolder}>
                                            {this.state.tags.map((i, index) => <Tag key={`Tag ${index}`} dot={i.split('#')[0]}>{i.split('#')[1]}</Tag>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            }
        }
        return element;
    }
}

export default Project;