import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import NavigationBar from './components/navigation/NavigationBar/NavigationBar';
import SideBar from './components/navigation/SideBar/SideBar';
import Footer from './components/Footer/Footer';

class Layout extends Component {
    state = {
        sideBarVisible: false
    }

    componentDidUpdate(previousProps) {
        if (previousProps.location.pathname !== this.props.location.pathname && this.state.sideBarVisible) {
            this.setState({ sideBarVisible: false });
        }
    }

    toggleSideBarHandler = () => {
        this.setState(previous => {
            return {
                sideBarVisible: !previous.sideBarVisible
            };
        });
    }

    render() {
        return (
            <Fragment>
                <NavigationBar sideMenuClick={this.toggleSideBarHandler}/>
                <SideBar show={this.state.sideBarVisible} sideMenuClick={this.toggleSideBarHandler} close={this.toggleSideBarHandler}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default withRouter(Layout);