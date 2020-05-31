import React, { Component } from 'react';
import RightCard from './RightCard';
import moment from 'moment'

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : {},
    }
  }
  render() {
    const {startDate, endDate} = this.state.dates
    return (
      <div className="container mt-40">
        <div className="row">
          <div className="col-md-6">
            <h3 className="roman">Review House Rules</h3>
            <h4 className="number-of-nights">3 Nights In Surry Hills</h4>
            <div className="checkouts-wrapper">
              <div className="check">
                <div className="label-grey">
                  <p>{moment(startDate).format("MMM")}</p>
                  <p>{moment(startDate).format("D")}</p>
                </div>
                <div className="check-in">
                  <p>{moment(startDate).format("dddd")} Check-in</p>
                  <p>After 3:00 PM</p>
                </div>
              </div>
              <div className="check check-out">
                <div className="label-grey">
                <p>{moment(endDate).format("MMM")}</p>
                  <p>{moment(endDate).format("D")}</p>
                </div>
                <div className="checkout">
                  <p>{moment(endDate).format("dddd")} Check-out</p>
                  <p>11:00 AM</p>
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