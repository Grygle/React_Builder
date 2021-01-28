import React from 'react'

import pizzaImage from '../../assets/images/pizza.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={pizzaImage} alt='pizza'/>
    </div>
)

export default logo;