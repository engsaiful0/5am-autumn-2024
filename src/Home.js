import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51P1D5FCTgA3yQDCvTbaQtkSUSMe64xiu0SMiTcMedWRthaxfAUIcG4c29ItGAqY1czV5bRZZhbzQjqXWowthFQqP00wkwYo4en'); // Replace with your publishable key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    try {
      // Fetch clientSecret from the backend
      const response = await fetch('http://localhost:5000/api/payments/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1000 }), // Amount in cents
      });

      const { clientSecret } = await response.json();
      console.log('clientSecret', clientSecret);

      if (!clientSecret) {
        throw new Error('Failed to retrieve clientSecret from backend.');
      }

      // Confirm the card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
      console.log('result of confirmCardPayment', result);
      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('Payment successful!');
      }
    } catch (error) {
      setMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Purchase'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

const Home = () => {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <h1>Product Page</h1>
        <p>Price: $10.00</p>
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Home;
