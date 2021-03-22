import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
    let inputElementType = null;

    switch(props.elementType){
        case('select'):
            inputElementType = (
                <select 
                    className={styles.InputElement}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        case('textarea'):
            inputElementType = <textarea 
                className={styles.InputElement} 
                {...props.elementConfig} 
                value={props.value}/>;
            break;
        default:
            inputElementType = <input 
                className={styles.InputElement} 
                {...props.elementConfig} 
                value={props.value}/>
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElementType}
        </div>
    )
};

export default input;