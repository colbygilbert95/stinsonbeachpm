import React, { Component } from 'react';
import axios from 'axios';

class WhoIsComing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  getClientSecretAndContinue = () => {
    axios.post('http://localhost:5001/stinsonbeachpm/us-central1/app/charge' , {
      chargeAmount: 314
    }).then(res => {
      this.props.nextStep({
        intentSecret: res.data.client_secret
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="container mt-40">
        <div className="row">
          <div className="col-md-6">
            <h3>Who's Coming</h3>
            <h4 className="number-of-nights">Guests</h4>
            <select class="form-control mt-30 gusts-slect-menu">
              <option>Guests</option>
              <option selected>1 guest</option>
              <option>2 guest</option>
              <option>3 guest</option>
              <option>4 guest</option>
              <option>5 guest</option>
            </select>
            <h4 className="number-of-nights switch">
              Traveling For Work?
              <div class="material-switch ">
                <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox" />
                <label for="someSwitchOptionDefault" class="label-default"></label>
              </div>
            </h4>
            <h4 className="number-of-nights">
              Introduce Yourself
            </h4>
            <p>Let Noa & Keren know a little bit about yourself and why you're coming.</p>
            <textarea rows="10" className="mt-15"> </textarea>
            <div className="agree">
              <button onClick={this.getClientSecretAndContinue}>Continue</button>
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

export default WhoIsComing;