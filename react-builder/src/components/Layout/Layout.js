import React from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

//Parenthesis used to return an object
const layout = (props) => (
    <Aux>
        <div> Toolbar / Side Drawer / Backdrop </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout