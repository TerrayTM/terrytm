import React from 'react';

import AdjectiveItem from './AdjectiveItem/AdjectiveItem';
import Adjectives from '../../constants/adjectives';
import classes from './AdjectiveArea.css';

const adjectiveArea = (props) => (
    <section className={classes.AdjectiveArea}>
        <div>
            {Adjectives.map(i => <AdjectiveItem value={i} key={i}/>)}
        </div>
    </section>
);

export default adjectiveArea;