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
    fa_Icon: PropTypes.string.isRequired,
    fa_Name: PropTypes.string.isRequired,
}

export default FormInput;