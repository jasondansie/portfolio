import React, { useRef } from 'react';
import classes from './Contact.module.css'
import FormInput from './FormInput';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const clickHandler = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_dslz71l', 'template_17j9yuq', form.current, '7_DtuPHPpCV0KZWMA')
        .then((result) => {
            alert(`Message sent, status: ${result.status} response: ${result.text} `);
        }, (error) => {
            alert(`An error occured message not sent. Error: ${error} `);
        });
    }

    return (
        <div className={classes.Contact}>
            <div className={classes.container}>
                <h1>Contact</h1>
                <hr />
                <form ref={form} onSubmit={clickHandler}>
                    <FormInput
                        inputLabel={'Your Name (required)'}
                        inputName={'user_name'}
                        inputType={'text'}
                    />
                    <FormInput
                        inputLabel={'Your Email (required)'}
                        inputName={'user_email'}
                        inputType={'user_email'}
                    />
                    <FormInput
                        inputLabel={'Subject (required)'}
                        inputName={'subject'}
                        inputType={'text'}
                    />

                    <p>Message</p>
                    <textarea name="message" cols="30" rows="10"></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>      
        </div>
    );
};

export default Contact;