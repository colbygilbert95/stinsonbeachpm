import React, { Component } from "react";
import moment from 'moment';

class TotalCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: 0,
      rate: 0,
      nights: 0,
      tax: 0,
      total: 0
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.startDate !== this.props.starDtae && prevProps.endDate !== this.props.endDate && this.props.startDate !== null && this.props.endDate !== null) {
      this.calculateBooking(this.props.startDate, this.props.endDate)
    }
  }
  calculateRent = (startDate, endDate) => {
    let rent = 0;
    for (
      let j = moment(startDate);
      j.isBefore(endDate, "day");
      j.add(1, "days")
    ) {
      if (j.day() <= 4) {
        rent += this.props.listing.WeekdayRate
      } else if (j.day() >= 5) {
        rent += this.props.listing.WeekendRate
      }
    }
    return rent
  }

  calculateBooking = (startDate, endDate) => {
    const nights = endDate.diff(startDate, 'days')
    const rent = this.calculateRent(this.props.startDate, this.props.endDate)
    const rate = rent / nights
    const tax = Math.round((rent + this.props.listing.CleaningFee) * .14 * 100) / 100
    let total = tax + rent + this.props.listing.CleaningFee
    this.setState({ rate: rate, nights: nights, tax: tax, rent: rent, total: total } , () => {
      window.localStorage.setItem('prices' , JSON.stringify(this.state))
    })
  }
  render() {
    const { rent, rate, nights, tax, total } = this.state;
    const { listing } = this.props;
    return (
      <div className="total-calculator">
        <div>
          <div>${rate} x {nights} nights</div>
          <div >${rent}</div>
        </div>
        <div>
          <div>Cleaning Fee</div>
          <div>${listing.CleaningFee}</div>
        </div>
        <div>
          <div>Tax</div>
          <div>${tax}</div>
        </div>
        <div>
          <strong>Total</strong>
          <strong>${total}</strong>
        </div>
      </div>
    );
  }
}

export default TotalCalculator;
