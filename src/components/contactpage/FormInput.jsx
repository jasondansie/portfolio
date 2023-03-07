import React from 'react';
import classes from './FormInput.module.css'

const FormInput = ({inputLabel, inputName, inputType}) => {
    return (
        <div className={classes.formInput}>
            <p>{inputLabel}</p>
            <input type={inputType} name={inputName} required />
        </div>
    );
};

export default FormInput;