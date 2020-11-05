import React from 'react';
import './Footer.css';
import './Form.css';
import {Button} from './Button';

function Form() {
    return (
        <div className="form-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <label>Name: </label>
                        <input type="name" name="name" placeholder="Enter your name" className="footer-input"/>
                        <label>Email: </label>
                        <input type="email" name="email" placholder="Enter your Email" className="footer-input-2"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>          
        </div>
    );
}

export default Form;
