import React, { Fragment } from 'react';

import HeroArea from '../../components/HeroArea/HeroArea';
import TextArea from '../../components/TextArea/TextArea';
import Button from '../../components/userInterfaces/Button/Button';
import classes from './Donate.css';

const donate = () => (
    <Fragment>
        <HeroArea color="#E8E8E8">
            <h1 className={classes.Header}>Support My Projects!</h1>
            <p className={classes.Header}>I accept donations through PayPal!</p>
        </HeroArea>
        <TextArea title="Donate">
        If any of my software or services helped you in any way, please consider donating to keep them alive!
        Your donation will go towards covering server hosting fees, API usage costs, and some snacks while I make daily maintenance on software.
        Thank you for your generosity!
        </TextArea>
        <div className={classes.Button}>
            <Button value="Donate via PayPal ❤️" click={() => window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=V9PA4UGW67SYG&lc=CA&item_name=TerryTM&no_note=1&no_shipping=1&currency_code=CAD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted'}/>
        </div>
    </Fragment>
);

export default donate;