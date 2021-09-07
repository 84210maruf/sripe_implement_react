import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import './App.css';
import InjectCheckout from './CardComponent/CardComponent';


const stripePromise = loadStripe('pk_test_51JU4olSJX1KsV9pIbkTYPeWlapvHDBLh6GkTP7T3bdVlHRwBLFVMoGvhmwPrA4TAeMWIwtanc2WqPQVWQ3jk2OqZ00EqOgKKss');

function App() {
  console.log(stripePromise);
  return (
    <div className="App">
      <div className="product">
        <Elements stripe={stripePromise}>
          <InjectCheckout/>
        </Elements>
      </div>
    </div>
  );
}

export default App;
