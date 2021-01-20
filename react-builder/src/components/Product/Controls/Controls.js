import React from 'react';

import styles from './Controls.module.css';
import Control from './Control/Control';

const arrayOfControls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const controls = (props) => (
    <div className={styles.Controls}>
        {arrayOfControls.map(element => (
            <Control 
                key={element.label} 
                ingredientLabel={element.label}
                added={() => props.ingredientAdded(element.type)}
                removed={() => props.ingredientRemoved(element.type)}
                disabled={props.disabled[element.type]}
            />
        ))}
    </div>
);

export default controls;
