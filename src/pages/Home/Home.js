import React, { Fragment, Component } from 'react';
import { Animated } from 'react-animated-css';

import HeroArea from '../../components/HeroArea/HeroArea';
import TextArea from '../../components/TextArea/TextArea';
import ProjectArea from '../../components/ProjectsArea/ProjectsArea';
import Phrases from '../../constants/phrases';
import ActivityArea from '../../components/ActivityArea/ActivityArea';
import classes from './Home.css';
import AdjectiveArea from '../../components/AdjectiveArea/AdjectiveArea';
import SkillsArea from '../../components/SkillsArea/SkillsArea';
import BlogArea from '../../components/BlogArea/BlogArea';
import FreelanceArea from '../../components/FreelanceArea/FreelanceArea';
import Background from '../../assets/images/userInterfaces/background.png';

class Home extends Component {
    state = {
        visible: true,
        phraseIndex: 0
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(previous => {
                return {
                    visible: !previous.visible,
                    phraseIndex: (previous.phraseIndex + 1) % Phrases.length
                };
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Fragment>
                <HeroArea image={Background} color="#263648">
                    <div className={classes.Picture}></div>
                    <h1 className={classes.Heading}>Hello!<br className={classes.MobileOnly470}/> I'm Terry Zheng!</h1>
                    <h2 className={[classes.Heading, classes.DesktopOnly470].join(' ')}>I'm a Software Engineering student at<br className={classes.MobileOnly750}/> University of Waterloo.</h2>
                    <h2 className={[classes.Heading, classes.MobileOnly470].join(' ')}>I'm a SE student at UWaterloo.</h2>
                    <div className={classes.AnimatedHeading}>
                        <h2 className={[classes.Heading, classes.DesktopOnly600].join(' ')}>In my free time I can be found</h2>
                        <h2 className={[classes.Heading, classes.MobileOnly600].join(' ')}>I love</h2>
                        <div>
                            <Animated animationIn="slideInDown" animationOut="fadeOutDown" isVisible={this.state.visible}>
                                <h2 className={classes.Heading}>{Phrases[this.state.phraseIndex]}</h2>
                            </Animated>
                            <Animated className={classes.Secondary} animationIn="slideInDown" animationOut="fadeOutDown" isVisible={!this.state.visible}>
                                <h2 className={classes.Heading}>{Phrases[this.state.phraseIndex]}</h2>
                            </Animated>
                        </div>
                    </div>
                </HeroArea>
                <AdjectiveArea/>
                <TextArea title="About Me">
                    Welcome to my website! I am an individual who loves computer science and software development! I started programming since grade 4 and have been pursuing my passion in coding ever since. From reading
                    books to online research, you can always find me fascinated with algorithms, programming techniques, and application design. Currently, I am looking for a software engineering internship position
                    for the summer of 2019.
                </TextArea>
                <SkillsArea/>
                <ActivityArea/>
                <ProjectArea/>
                <BlogArea/>
                <FreelanceArea/>
            </Fragment>
        );
    }
}

export default Home;