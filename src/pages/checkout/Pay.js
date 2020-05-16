import React, { Component } from 'react';
import InjectedCheckoutForm from './InjectedCheckoutForm.js';
import RightCard from './RightCard';

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payWay: 'full'
    }
  }
  changePayWay = (way) => {
    this.setState({
      payWay: way
    })
  }
  render() {
    const { payWay } = this.state
    return (
      <div className="container mt-40">
        <div className="row">
          <div className="col-md-6">
            <h3>Confirm and Pay</h3>
            <span className="title-3 block mt-40">How do you want to pay?</span>
            <div className="ways-to-pay">
              <a href="#" className={payWay === 'full' ? 'way-to-pay active' : 'way-to-pay'} onClick={() => this.changePayWay('full')}>
                <span className={payWay === 'full' ? 'circle-thick' : 'circle-thin'}></span>
                <p className="way-title">Pay In Full</p>
                <p className="way-price ml-auto">314.63$</p>
              </a>
              <a href="#" className={payWay === 'less' ? 'way-to-pay active' : 'way-to-pay'} onClick={() => this.changePayWay('less')}>
                <span className={payWay === 'less' ? 'circle-thick' : 'circle-thin'}></span>
                <p className="way-title">
                  Pay less upfront
                  <p className="way-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </p>
                <p className="way-price ml-auto">
                  <p>314.63$</p>
                  <span className="way-state">now</span>
                </p>
              </a>
            </div>
            <span className="title-3 block mt-40">Cancellation policy</span>
            <p className="policy-description">Cancel before 2:00 PM on Mar 22 and get a 50% refund, minus the first night and
            service fee. <a href="#" className="color-blue">More details</a>
            </p>
            <p className="policy-footer">By selecting the button below, I agree to the <a href="#" className="color-blue">House Rules</a>, <a href="#" className="color-blue">Cancellation Policy</a>, and <a href="#" className="color-blue">the Guest Refund Policy</a>. I also agree to pay the total amount shown, which includes Service Fees.</p>
            <h4 className="credit-title">
              <span className="title-3">Pay With</span>
              <div className="cards">
                <img src="/images/cards.png" />
              </div>
            </h4>
            <InjectedCheckoutForm intentSecret={this.props.data.intentSecret}></InjectedCheckoutForm>
          </div>
          <div className="col-md-6">
            <RightCard></RightCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;