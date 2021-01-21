import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    //const ingredientSummary = props.ingredients
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
    return  (<li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>)
        })
    return (
        <Aux>
            <h3> Order </h3>
            <p>Your ingredients are:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Checkout</p>
        </Aux>
    )
};

export default orderSummary;