import React from 'react';
import ReactDOM from 'react-dom';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event)
    
    const {stripe, elements} = this.props
    
    if (!stripe || !elements) {
      return;
    }
    
    const result = await stripe.confirmCardPayment( this.props.data.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    })

    if (result.error) {
      console.log(result)
    } 
    else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log(result)
      }
    }

  };
  render() {
    const {stripe} = this.props;
    return (
      <form id="payment-form" onSubmit={this.handleSubmit}>
        <CardElement/>
      </form>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

export default InjectedCheckoutForm;