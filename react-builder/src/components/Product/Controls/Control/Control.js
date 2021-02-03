import React from 'react';

import styles from './Control.module.css';

const control = (props) => (
    <div className={styles.Control}>
        <div className={styles.Label}>{props.ingredientLabel}</div>
        <button onClick={props.removed} disabled={props.disabled}>Remove</button>
        <button onClick={props.added}>Add</button>
    </div>
);

export default control;
