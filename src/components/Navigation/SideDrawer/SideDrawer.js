import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if  (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (

        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
            </div>

        </React.Fragment>
        
    );
}

export default sideDrawer;