import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './Layout';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Project/Project';
import Blog from './pages/Blog/Blog';
import AllContent from './pages/AllContent/AllContent';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import * as actions from './store/actions/actions';

class App extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/contact" component={Contact}/>  
                    <Route path="/donate" component={Donate}/>  
                    <Route exact path="/blog/:category/:name" component={Blog}/>
                    <Route exact path="/projects/:category/:name" component={Projects}/>
                    <Route exact path="/projects" render={() => <AllContent type="projects"/>}/>
                    <Route exact path="/blog" render={() => <AllContent type="blog"/>}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/" component={ErrorPage}/>
                </Switch>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(actions.loadData())
    };
}

export default withRouter(connect(null, mapDispatchToProps)(App));