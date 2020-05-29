import React, { Component } from 'react';
import RightCard from './RightCard';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container mt-40">
        <div className="row">
          <div className="col-md-6">
            <h3 className="roman">Review House Rules</h3>
            <h4 className="number-of-nights">3 Nights In Surry Hills</h4>
            <div className="checkouts-wrapper">
              <div className="check">
                <div className="label-grey">
                  <p>Mar</p>
                  <p>22</p>
                </div>
                <div className="check-in">
                  <p>Sunday Check-in</p>
                  <p>After 2:00 PM</p>
                </div>
              </div>
              <div className="check check-out">
                <div className="label-grey">
                  <p>Mar</p>
                  <p>22</p>
                </div>
                <div className="checkout">
                  <p>Wedensday Check-out</p>
                  <p>10:00 AM</p>
                </div>
              </div>
            </div>
            <div className="marker">
              <span><i class="fa fa-map-marker"></i></span>
              <span>Self Check-In With Lockbox</span>
            </div>
            <h4 className="number-of-nights">Things to Keep in mind</h4>
            <div className="things">
              <div className="thing">
                <span className="icon">
                  <i className="fa fa-child"></i>
                </span>
                <span className="text">Not Suitable For Children And Infants</span>
              </div>
              <div className="thing">
                <span className="icon">
                  <i className="fa fa-paw"></i>
                </span>
                <span className="text">No Pets</span>
              </div>
              <div className="thing">
                <span className="icon">
                  <i className="fa fa-glass"></i>
                </span>
                <span className="text">No Parties Or Events</span>
              </div>
              <div className="thing">
                <span className="icon">
                  <i className="fa fa-fire"></i>
                </span>
                <span className="text">No Smoking</span>
              </div>
            </div>
            <div>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="agree">
              <button onClick={this.props.nextStep}>Agree & Continue</button>
            </div>
          </div>
          <div className="col-md-6">
            <RightCard></RightCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;