import React, { Component } from 'react';
import {connect} from 'react-redux';

class RightCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: localStorage.getItem('listing') ? JSON.parse(localStorage.getItem('listing')) : {},
      dates: localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : {},
      total: localStorage.getItem('total') ? localStorage.getItem('total') : {},
    }
  }
  render() {
    return (
      <div className="flat-card-wrapper">
        <div className="flat-card">
          <div className="header">
            <div>
              <div className="flat-title">{this.state.listing.Title}</div>
              <div className="flat-description">{this.state.listing.Location}</div>
              <div className="star">
                <span className="icon">
                  <i className="fa fa-star"></i>
                </span>
                {this.state.listing.AvgReviews} 
                ({this.state.listing.NumReviews})
              </div>
            </div>
            <div>
              <img src="/images/redy-earn.jpg" />
            </div>
          </div>
          <div className="guests">
            <span className="icon"><i class="fa fa-user"></i></span>
            <span className="text">{this.state.totalGuests} guests</span>
          </div>
          <div className="dates">
            <span className="icon"><i class="fa fa-calendar"></i></span>
            <span>{this.state.dates.startDate}</span>
            <span>{this.state.dates.endDate}</span>
          </div>
          <div className="price-details">
            <div className="price-detail">
              <span>$77 X 3 nights</span>
              <span>$231.81</span>
            </div>
            <div className="price-detail">
              <span>cleaning fee <i className="fa fa-question-circle"></i></span>
              <span>$43.90</span>
            </div>
            <div className="price-detail">
              <span>service fee <i className="fa fa-question-circle"></i></span>
              <span>$38</span>
            </div>
          </div>
          <div className="total">
            <span>Total (USD)</span>
            <span>$314.63</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  totalGuests: state.booking.totalGuests,
  dates: state.booking.dates,
  listing: state.booking.listing,
})

export default connect(mapStatetoProps)(RightCard);