import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {

  return (
    <div>
      Complete your $1000 payment:
       <form>
        <label>
          Full Name:
          <input
            name="name"
            type="text"
            />
        </label>
        <br />
        <label>
          Card Number:
          <input
            name="cardNumber"
            type="text"
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            name="expDate"
            type="text"
          />
        </label>
        <label>
          CVV:
          <input
            name="cvv"
            type="text"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Payment;
