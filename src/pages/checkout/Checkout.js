import React, { Component } from 'react';
import CheckoutHeader from './CheckoutHeader';
import Review from './Review';
import WhoIsComing from './WhoIsComing';
import Pay from './Pay';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 2,
      components: [Review, WhoIsComing, Pay]
    }
  }
  nextStep = () => {
    this.setState({
      step: ++this.state.step
    })
  }
  changeStep = (step) => {
    this.setState({
      step
    })
  }
  render() {
    const { step, components } = this.state
    const View = components[step]
    return (
      <div>
        <CheckoutHeader changeStep={this.changeStep} step={step} />
        <View nextStep={this.nextStep} />
      </div>
    )
  }
}

export default Checkout;