import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    let addedStyles = [styles.SideDrawer, styles.Close]
    if(props.display) {
        addedStyles = [styles.SideDrawer, styles.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.display} backdropClicked={props.close}/>
            <div className={addedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer