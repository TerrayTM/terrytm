import React from 'react';
import Slick from 'react-slick';

import Selector from './Selector/Selector';
import classes from './SlideShow.css';

const slideShow = (props) => {
    const length = props.images.length;
    const configuration = [
        { breakpoint: 920, settings: { slidesToShow: length > 3 ? 3 : length, slidesToScroll: length > 3 ? 3 : length }}, 
        { breakpoint: 720, settings: { slidesToShow: length > 2 ? 2 : length, slidesToScroll: length > 2 ? 2 : length }}, 
        { breakpoint: 540, settings: { slidesToShow: length > 1 ? 1 : length, slidesToScroll: length > 1 ? 1 : length, dots: false }}
    ];
    return (
        <div className={classes.SlideShow}>
            <div>
                <div className={classes.Main} style={{ backgroundImage: `url(${props.current})` }}></div>
            </div>
            <div className={classes.SelectorHolder}>
                <Slick dots slidesToShow={length > 4 ? 4 : length} slidesToScroll={4} responsive={configuration}>
                    {props.images.map((i, index) => <Selector key={`Selector ${index}`} item={i} click={() => props.click(i)} selected={props.current === i}/>)}
                </Slick>
            </div>
        </div>
    );
};

export default slideShow;