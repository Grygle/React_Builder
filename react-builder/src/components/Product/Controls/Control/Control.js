import React from 'react';

import styles from './Control.module.css';

const control = (props) => (
    <div className={styles.Control}>
        <div>{props.ingredientLabel}</div>
        <button >Remove</button>
        <button>Add</button>
    </div>
);

export default control;