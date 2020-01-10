import React from 'react';
import classes from './SBToggle.css';


const sbToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.open}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    

);



export default sbToggle;