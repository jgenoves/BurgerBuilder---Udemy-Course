import React,{ Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToggle = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
            <React.Fragment>
                <Toolbar open={this.sideDrawerToggle}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggle}/>

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )

    }

};

export default Layout;