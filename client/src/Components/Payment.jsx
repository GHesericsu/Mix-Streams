import React from 'react';
import PropTypes from 'prop-types';

const Payment = ({ changeToVideo }) => (
  <div>
    Complete your $450 payment:
    <form>
      <label htmlFor="name">
        Full Name:
        <input
          name="name"
          type="text"
        />
      </label>
      <br />
      <label htmlFor="cardNumber">
        Card Number:
        <input
          name="cardNumber"
          type="text"
        />
      </label>
      <br />
      <label htmlFor="expDate">
        Expiration Date:
        <input
          name="expDate"
          type="text"
        />
      </label>
      <label htmlFor="cvv">
        CVV:
        <input
          name="cvv"
          type="text"
        />
      </label>
      <input type="submit" value="You Agree To Pay $450 for this Live Stream" onClick={changeToVideo} />
    </form>
  </div>
);

Payment.propTypes = {
  changeToVideo: PropTypes.func.isRequired,
};

export default Payment;
