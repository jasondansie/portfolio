import React from 'react';
import classes from './FormInput.module.css';
import PropTypes from 'prop-types';


const FormInput = ({ inputLabel, inputName, inputType }) => {
    return (
        <div className={classes.formInput}>
            <p>{inputLabel}</p>
            <input type={inputType} name={inputName} required />
        </div>
    );
};

FormInput.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
}

export default FormInput;