import React, { Component } from 'react';
import {connect} from 'react-redux';

class RightCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: localStorage.getItem('listing') ? JSON.parse(localStorage.getItem('listing')) : {},
      dates: localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : {},
      prices: localStorage.getItem('prices') ? JSON.parse(localStorage.getItem('prices')) : {},
      total: localStorage.getItem('total'),
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
              <img src={this.state.listing.PictureURL} />
            </div>
          </div>
          <div className="guests">
            <span className="icon"><i class="fa fa-user"></i></span>
            <span className="text">{this.state.total} guests</span>
          </div>
          <div className="dates">
            <span className="icon"><i class="fa fa-calendar"></i></span>
            <span>{this.state.dates.startDate}</span>
            <span>{this.state.dates.endDate}</span>
          </div>
          <div className="price-details">
            <div className="price-detail">
              <span>${this.state.prices.rate} X {this.state.prices.nights} nights</span>
              <span>$231.81</span>
            </div>
            <div className="price-detail">
              <span>cleaning fee <i className="fa fa-question-circle"></i></span>
              <span>${this.state.listing.CleaningFee}</span>
            </div>
            <div className="price-detail">
              <span>service fee <i className="fa fa-question-circle"></i></span>
              <span>${this.state.prices.tax}</span>
            </div>
          </div>
          <div className="total">
            <span>Total (USD)</span>
            <span>${this.state.prices.total}</span>
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