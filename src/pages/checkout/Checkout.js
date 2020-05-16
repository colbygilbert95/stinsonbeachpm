import React, { Component } from 'react';
import CheckoutHeader from './CheckoutHeader';
import Review from './Review';
import WhoIsComing from './WhoIsComing';
import Pay from './Pay';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      components: [WhoIsComing, Pay],
      data: {}
    }
  }
  nextStep = (data) => {
    this.setState({
      data: data ? data: {}
    } , () => {
      this.setState({
        step: ++this.state.step,
      })
    })
  }
  changeStep = (step) => {
    this.setState({
      step
    })
  }
  render() {
    const { step, components , data } = this.state
    const View = components[step]
    return (
      <div>
        <CheckoutHeader changeStep={this.changeStep} step={step} />
        <View nextStep={this.nextStep} data={data} />
      </div>
    )
  }
}

export default Checkout;


