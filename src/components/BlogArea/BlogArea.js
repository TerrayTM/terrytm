import React from 'react';

import classes from './BlogArea.css';
import AreaHeader from '../AreaHeader/AreaHeader';
import BlogItem from './BlogItem/BlogItem';
import Blog from '../../constants/blog';

const blogArea = () => (
    <section className={classes.BlogArea}>
        <div className={classes.Header}>
            <AreaHeader noLine>Visit my Blog (coming soon)!</AreaHeader>
        </div>
        <div className={classes.Row}>
            {Blog.first.map((i, index) => <BlogItem source={i.image} link={i.link} key={`First Blog ${index}`}/>)}
        </div>
        <div className={classes.Row}>
            {Blog.second.map((i, index) => <BlogItem source={i.image} link={i.link} key={`Second Blog ${index}`}/>)}
        </div>
    </section>
);

export default blogArea;