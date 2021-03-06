import React, { Component } from 'react';
class CheckoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { step, changeStep } = this.props
    return (
      <div id="checkout-header">
        <div className="logo"><img src="/images/logo.png" /></div>
        <div className="container">
          <div className="row">
            <ul className="links">
              <li className={step == 0 ? 'link active' : 'link'}><a href="#" onClick={(e) => { changeStep(0 , e) }}>1. Review house rules</a></li>
              <li className={step == 1 ? 'link active' : 'link'}><a href="#" onClick={(e) => { changeStep(1 , e) }}>2. Who's coming ?</a></li>
              <li className={step == 2 ? 'link active' : 'link'}><a href="#" onClick={(e) => { changeStep(2 , e) }}>3. Confirm and pay</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutHeader;