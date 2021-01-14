import React from 'react';

import styles from './Product.module.css';
import ProductItem from './ProductItems/ProductItem';

const product = (props) => {
    const newIngredients = Object.keys(props.ingredients) //only keys: salad, cheese, meat
        //transforming object with key value fields into array with ingredients 
        //where the value decises how many ingredients are needed
        //key says which types of ingredients are used
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <ProductItem key={ingKey + i} type={ingKey} />;
            })
        });

    return(
        <div className={styles.Product}>
            <ProductItem type="bread-top" />
            {newIngredients}
            <ProductItem type="bread-bottom" />
        </div>
    );
};

export default product;