import Orders from "../../containers/Orders/Orders";

import React from 'react'

import styles from './Order.module.css';

const order = (props) => {
    const ingredients = [];

    //converting object to array of objects
    for(let ingredientName in props.ingredients){
        ingredients.push(
            {
                name: ingredientName, 
                amount: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientOutput = ingredients.map(ingredient => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #cccccc',
                padding: '5px',
                boxShadow: '0 2px 2px #eeeeee'
            }}
            key={ingredient.name}>{ingredient.name} ({ingredient.amount})</span>
    })

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;