import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <Button buttonType="Danger" clicked={props.buyCancel}>Cancel</Button>
            <Button buttonType='Success' clicked={props.buyContinue}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;