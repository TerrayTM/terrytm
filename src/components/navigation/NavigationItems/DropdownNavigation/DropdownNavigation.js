import React from 'react';

import DropDownSection from './DropdownSection/DropdownSection';
import classes from './DropdownNavigation.css'
import Spinner from '../../../userInterfaces/Spinner/Spinner';
import ErrorHandler from '../../../ErrorHandler/ErrorHandler';

const dropdownNavigation = (props) => {
    let data = <div className={classes.Spinner}><Spinner/></div>;
    if (props.data) {
        if (props.data === -1) {
            data = <div className={classes.ErrorContainer}><ErrorHandler error={<p>An error has occurred. Please try <span className={classes.Reload} onClick={() => window.location.reload(true)}>reloading the page</span>.</p>}/></div>;
        }
        else {
            if (props.name === 'Projects') {
                if (!props.data['Past Projects'] || !props.data['Active Projects']) {
                    data = <div className={classes.ErrorContainer}><ErrorHandler error={<p>An error has occurred. Please try <span className={classes.Reload} onClick={() => window.location.reload(true)}>reloading the page</span>.</p>}/></div>;
                } else {
                    data = [];
                    data.push(<DropDownSection sideBar={props.sideBar} title={'Active Projects'} items={props.data['Active Projects']} key={'Active Projects'}/>);
                    const length = Math.min(6, props.data['Past Projects'].length);
                    data.push(<DropDownSection sideBar={props.sideBar} title={'Past Projects'} items={props.data['Past Projects'].slice(0, length)} key={'Past Projects'}/>);
                    if (props.data['Past Projects'].length > length) {
                        let end = props.data['Past Projects'].length;
                        let extra = [];
                        if (props.data['Past Projects'].length - length > 5) {
                            end = length + 5;
                            extra = {
                                label: 'View All Projects...',
                                to: '/projects'
                            };
                        }
                        data.push(<DropDownSection extender sideBar={props.sideBar} items={props.data['Past Projects'].slice(length, end).concat(extra)} key={'Extender'}/>);
                    }
                }
            } else {
                data = Object.keys(props.data).map(i => {
                    return <DropDownSection sideBar={props.sideBar} title={i} items={props.data[i]} key={i}/>;
                });
            }
        }
    }
    return (
        <li className={[props.sideBar ? classes.SideBar : null, props.path.includes(props.name.toLowerCase()) ? classes.active : null, classes.Dropdown].join(' ')}>
            <div className={props.show ? classes.Show : null} onClick={props.click}>
                <img className={classes.Icon} src={props.icon} draggable={false} alt=""/>
                <span className={classes.Tab}>{props.name}</span>
            </div>
            <div className={[classes.DropdownContent, props.show ? classes.Show : null].join(' ')}>
                <div>
                    {data}
                </div>
            </div>
        </li>
    );
};

export default dropdownNavigation;