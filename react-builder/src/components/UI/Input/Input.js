import React from 'react';
import styles from './Input.module.css';

const input = (props) => {
    let inputElementType = null;
    const inputStyles = [styles.InputElement];

    if(props.invalid && props.shouldValidate && props.edited) {
        inputStyles.push(styles.Invalid);
    }

    switch(props.elementType){
        case('select'):
            inputElementType = (
                <select 
                    className={inputStyles.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        case('textarea'):
            inputElementType = <textarea 
                className={inputStyles.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        default:
            inputElementType = <input 
                className={inputStyles.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElementType}
        </div>
    )
};

export default input;