import React, { Component } from 'react';
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
            <h4 className="credit-title">
              <span className="title-3">Pay With</span>
              <div className="cards">
                <img src="/images/cards.png" />
              </div>
            </h4>
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1"><i className="fa fa-credit-card"></i></span>
              <input type="text" class="form-control" placeholder="credit or debit card" />
            </div>
            <a href="#" className="enter-coupon">Enter a coupon</a>
            <span className="title-3 block mt-40">How do you want to pay?</span>
            <div className="ways-to-pay">
              <a href="#" className={payWay === 'full' ? 'way-to-pay active' : 'way-to-pay'} onClick={() => this.changePayWay('full')}>
                <span className="circle-thick"></span>
                <p className="way-title">Pay In Full</p>
                <p className="way-price ml-auto">314.63$</p>
              </a>
              <a href="#" className={payWay === 'less' ? 'way-to-pay active' : 'way-to-pay'} onClick={() => this.changePayWay('less')}>
                <span className="circle-thin"></span>
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
            <div className="agree">
              <button>Confirm and pay</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="flat-card-wrapper">
              <div className="flat-card">
                <div className="header">
                  <div>
                    <div className="flat-title">Stylish and spacious, elegant loft for calm stay...</div>
                    <div className="flat-description">Entire apartment in Surry Hills</div>
                    <div className="star"><span className="icon"><i className="fa fa-star"></i></span>4.7 (16)</div>
                  </div>
                  <div>
                    <img src="/images/redy-earn.jpg" />
                  </div>
                </div>
                <div className="guests">
                  <span className="icon"><i class="fa fa-user"></i></span>
                  <span className="text">2 guests</span>
                </div>
                <div className="dates">
                  <span className="icon"><i class="fa fa-calendar"></i></span>
                  <span>Mar 22 , 2020</span>
                  <span>Mar 25 , 2020</span>
                </div>
                <div className="price-details">
                  <div className="price-detail">
                    <span>77$ X 3 nights</span>
                    <span>231.81$</span>
                  </div>
                  <div className="price-detail">
                    <span>cleaning fee <i className="fa fa-question-circle"></i></span>
                    <span>43.90$</span>
                  </div>
                  <div className="price-detail">
                    <span>service fee <i className="fa fa-question-circle"></i></span>
                    <span>38$</span>
                  </div>
                </div>
                <div className="total">
                  <span>Total (USD)</span>
                  <span>314.63$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;