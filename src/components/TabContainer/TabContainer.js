import React, { Component } from 'react';

import TabHeader from './TabHeader/TabHeader';
import TabHolder from './TabHolder/TabHolder';
import classes from './TabContainer.css';

class tabContainer extends Component {
    state = {
        currentTab: 0
    }

    switchTab = (index) => {
        this.setState({ currentTab: index });
    }

    render() {
        const headers = [], elements = [];
        this.props.items.forEach((i, index) => {
            headers.push(<TabHeader name={i.name} selected={this.state.currentTab === index} click={() => this.switchTab(index)} key={i.name}/>);
            elements.push(<TabHolder items={i.items} type={i.type} show={this.state.currentTab === index} key={`${i.name} ${i}`}/>);
        });
        return (
            <div>
                <div className={classes.Header}>
                    {headers}
                </div>
                {elements}
            </div>
        );
    }
}

export default tabContainer;