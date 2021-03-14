import React from 'react';
import Product from '../../Product/Product';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return(
        <div className={styles.CheckoutSummary}>
            <h1>Your pizza</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Product ingredients={props.ingredients}/>
            </div>
            <Button 
                buttonType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                buttonType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>

        </div>
    );
}

export default CheckoutSummary;