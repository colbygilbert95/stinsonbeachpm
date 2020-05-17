import React from 'react';
import ReactDOM from 'react-dom';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'

class CheckoutForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  handleSubmit = async (event) => {
    event.preventDefault();  
    const {stripe, elements} = this.props
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmCardPayment( this.props.intentSecret, {
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
        window.localStorage.clear()
        window.localStorage.setItem('session' , 'Property has reserved successfully')
        window.location.href = "/Book_Your_Rental";
      }
    }
  }
  render() {
    const {stripe} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement/>
        <a href="#" className="enter-coupon">Enter a coupon</a>
        <div className="agree">
          <button onClick={this.handleSubmit}>Confirm and pay</button>
        </div>
      </form>
    );
  }
}

const InjectedCheckoutForm = ({intentSecret}) => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} intentSecret={intentSecret} />
    )}
  </ElementsConsumer>
);

export default InjectedCheckoutForm;