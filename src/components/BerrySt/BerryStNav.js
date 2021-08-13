import classes from './BerryStNav.module.css';

import Button from "../UI/Button";

import { useHistory } from 'react-router';
import { Fragment } from 'react';

const BerryStNav = (props) => {
    const history = useHistory();
    const evisNavHandler = () => {
        history.push('/berry-st/evisceration');
    }
    return (
        <Fragment >
            <main className={classes.content}>
                <h1>Please Select a Section</h1>
                <div className={classes.navigation}>
                    <Button buttonType="Secondary" content="Evisceration" onClick={evisNavHandler}/>
                    <Button buttonType="Secondary" content="Dark Meat Debone"/>
                    <Button buttonType="Secondary" content="Debone"/>
                    <Button buttonType="Secondary" content="DSI"/>
                    <Button buttonType="Secondary" content="FP Line 1"/>
                    <Button buttonType="Secondary" content="FP Line 2"/>
                    <Button buttonType="Secondary" content="FP Line 3"/>
                    <Button buttonType="Secondary" content="FP Line 4"/>
                    <Button buttonType="Secondary" content="MSC"/>
                </div>
            </main>
        </Fragment>

    );

};
export default BerryStNav;