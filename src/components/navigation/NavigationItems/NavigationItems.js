import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'
import DropdownNavigation from './DropdownNavigation/DropdownNavigation';
import HomeIcon from '../../../assets/images/sideBar/home.png';
import ProjectsIcon from '../../../assets/images/sideBar/projects.png';
import BlogIcon from '../../../assets/images/sideBar/blog.png';
import DonateIcon from '../../../assets/images/sideBar/donate.png';
import ContactIcon from '../../../assets/images/sideBar/contact.png';

class NavigationItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownShown: 0
        };
        this.parent = React.createRef();
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.closeDropdown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeDropdown);
    }
    
    componentDidUpdate(previousProps) {
        if (previousProps.location.pathname !== this.props.location.pathname && this.state.dropdownShown !== 0) {
            this.setState({ dropdownShown: 0 });
        }
    }

    closeDropdown = (e) => {
        if (this.state.dropdownShown !== 0) {
            if (!this.parent.current.contains(e.target)) {
                this.setState({ dropdownShown: 0 });
            }
        }
    }

    toggleDropdown = (id) => {
        this.setState(previous => {
            return {
                dropdownShown: previous.dropdownShown === id ? 0 : id
            };  
        });
    }

    render() {
        return (
            <ul className={[classes.NavigationItems, this.props.sideBar ? classes.SideBar : null].join(' ')} ref={this.parent}>
                <NavigationItem sideBar={this.props.sideBar} icon={HomeIcon} to="/" exact>Home</NavigationItem>
                <DropdownNavigation sideBar={this.props.sideBar} icon={ProjectsIcon} path={this.props.location.pathname} data={this.props.projectsData} click={() => this.toggleDropdown(1)} show={this.state.dropdownShown === 1} name="Projects"/>
                <DropdownNavigation sideBar={this.props.sideBar} icon={BlogIcon} path={this.props.location.pathname} data={this.props.blogData} click={() => this.toggleDropdown(2)} show={this.state.dropdownShown === 2} name="Blog"/>
                <NavigationItem sideBar={this.props.sideBar} icon={DonateIcon} to="/donate">Donate</NavigationItem>
                <NavigationItem sideBar={this.props.sideBar} icon={ContactIcon} to="/contact">Contact</NavigationItem>
            </ul>
        );
    }
}

const stateToProps = state => {
    return {
        blogData : state.blogData,
        projectsData: state.projectsData
    };
}

export default withRouter(connect(stateToProps)(NavigationItems));