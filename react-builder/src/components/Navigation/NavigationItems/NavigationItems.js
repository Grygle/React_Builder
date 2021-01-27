import React from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>Pizza maker</NavigationItem>
        <NavigationItem link="/">Buy</NavigationItem>
    </ul>
);

export default navigationItems;