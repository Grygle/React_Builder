import React from 'react';

import styles from './Product.module.css';
import ProductItem from './ProductItems/ProductItem';

const product = (props) => {
    return(
        <div className={styles.Product}>
            <ProductItem type="bread-top" />
            <ProductItem type="cheese" />
            <ProductItem type="meat" />
            <ProductItem type="bread-bottom" />
        </div>
    );
};

export default product;