import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import React, { Component } from 'react';
import CardSection from './CardSection';
import './CardSection.css';



class CardComponent extends Component {


    handleSubmit = async (event) => {
        event.preventDefault();

        const {stripe, elements} = this.props;
        if(!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if(result.error) {
            console.log(result.error.message);
        }else {
            console.log('get CARD & return Token :',result.token)
        }


    };
    
    render() {
        return (
        <div className='cardContainer'>
            <form onSubmit={this.handleSubmit}>
                <CardSection/>
                <button className='pay-btn' disabled={!this.props.stripe} >Buy Now</button>
            </form>
        </div>
        )
    }
}

export default function InjectCheckout() {
    return (
        <ElementsConsumer>
            {({stripe, elements}) => (
                <CardComponent stripe={stripe} elements={elements}/>
            )}
        </ElementsConsumer>
    );
};
