import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
import './CardSection.css';

function CardSection() {

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: "green",
                fontSize: "22px",
                fontFamily: "sans-serif",
                fontSmoothing: "antialiased",
                "::placeholder": {
                    color: "#dfdfdfd",
                },
            },
            invalid: {
                color: "red",
                ":focus": {
                    color: "red",
                },
            },
        }
    }

    
    return (
        <label>
            <div className='cardtitle'>
            Fill the Cadrd Details
            <CardElement options={CARD_ELEMENT_OPTIONS}/>
            </div>
        </label>
    )
}

export default CardSection;
