import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    render(){
        return (
            <Aux>
            <Toolbar />
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