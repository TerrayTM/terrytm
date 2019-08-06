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
    constructor() {
        super();
        this.state = {
            primary: 0,
            secondary: 1,
            swap: false,
            width: {
                width: 'auto'
            }
        };
        this.textMeasure = React.createRef();
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { primary, secondary, swap } = this.state;
            const nextPrimary = (swap ? secondary + 1 : primary) % Phrases.length;
            const nextSecondary = (swap ? secondary : primary + 1) % Phrases.length;
            const nextSize = this.measureWidth(Phrases[swap ? nextPrimary : nextSecondary])//Math.max(this.measureWidth(Phrases[nextPrimary]), this.measureWidth(Phrases[nextSecondary]));
            this.setState({ primary: nextPrimary, secondary: nextSecondary, swap: !swap, width: { width: `${nextSize}px` } });
        }, 2000);
    }

    measureWidth = (text) => {
        this.textMeasure.current.innerHTML = text;
        return this.textMeasure.current.clientWidth + 1;
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Fragment>
                <HeroArea image={Background} color="#263648">
                    <div className={classes.Picture}></div>
                    <h1 className={classes.Heading}>Hello!<br className={classes.MobileOnly470} /> I'm Terry Zheng!</h1>
                    <h2 className={[classes.Heading, classes.DesktopOnly470].join(' ')}>I'm a Software Engineering student at<br className={classes.MobileOnly750} /> University of Waterloo.</h2>
                    <h2 className={[classes.Heading, classes.MobileOnly470].join(' ')}>I'm a SE student at UWaterloo.</h2>
                    <div className={classes.AnimatedHeading}>
                        <h2 className={[classes.Heading, classes.DesktopOnly600].join(' ')}>In my free time I can be found</h2>
                        <h2 className={[classes.Heading, classes.MobileOnly600].join(' ')}>I love</h2>
                        <div>
                            <Animated animationIn="slideInDown" animationOut="fadeOutDown" isVisible={!this.state.swap}>
                                <h2 className={[classes.Heading, classes.LeftAlign].join(' ')} style={this.state.width}>{Phrases[this.state.primary]}</h2>
                            </Animated>
                            <Animated className={classes.Secondary} animationIn="slideInDown" animationOut="fadeOutDown" isVisible={this.state.swap}>
                                <h2 className={[classes.Heading, classes.LeftAlign].join(' ')}>{Phrases[this.state.secondary]}</h2>
                            </Animated>
                        </div>
                    </div>
                    <h2 ref={this.textMeasure} className={classes.TextMeasure}>Placeholder</h2>
                </HeroArea>
                <AdjectiveArea />
                <TextArea title="About Me">
                    Welcome to my website! I am an individual who loves computer science and software development! I started programming since grade 4 and have been pursuing my passion in coding ever since. From reading
                    books to online research, you can always find me fascinated with algorithms, programming techniques, and application design. Currently, I am looking for a four month internship position starting in January 2020.
                </TextArea>
                <SkillsArea />
                <ActivityArea />
                <ProjectArea />
                <BlogArea />
                <FreelanceArea />
            </Fragment>
        );
    }
}

export default Home;