import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SBToggle from '../SideDrawer/SBToggle/SBToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        
        <SBToggle open={props.open} />
        

        <div className={classes.Logo}>
            <Logo />
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>

    </header>
);

export default toolbar;