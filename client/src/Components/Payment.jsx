import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

const Payment = ( { changeToVideo }) => {

  return (
    <div>
      Complete your $450 payment:
       <form onClick={changeToVideo} >
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
        <input type="button" value="You Agree To Pay $450 for this Live Stream" />
      </form>
    </div>
  )
}

export default Payment;
