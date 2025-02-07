import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    //setting new state when it depends on an old state
    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer 
                display={this.state.showSideDrawer} 
                close={this.SideDrawerClosedHandler}
            />
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout