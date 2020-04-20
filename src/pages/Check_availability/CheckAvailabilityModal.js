import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnit, getBlockedDays } from "../../store/actions/bookingActions";
import DateRangePickerWrapper from "../Property_Deatils/ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper";
import GuestCalculator from './GuestCalculator'
import { NavLink } from 'react-router-dom'

class CheckAvailabilityModal extends Component {
  render() {
    const { listing, blockedDays } = this.props;
    return (
      <div>
        {(this.props.modalState) &&
          <div>
            <div className="overlay"></div>
            <div className="check-availability-wrapper">
              <div className="content">
                <button className="remove-btn" onClick={this.props.closeModal}><i className="fa fa-remove"></i></button>
                <div className="price"><strong>$145 </strong> / night</div>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <strong>4.7</strong> (16)
                </div>
                <p><strong>Dates</strong></p>
                <DateRangePickerWrapper blockedDays={blockedDays} />
                <p className="mt-15"><strong>Guests</strong></p>
                <GuestCalculator></GuestCalculator>
                <NavLink className="check-availability-btn" to="/checkout">Reserve</NavLink>
                <p className="text-center mt-10 font-bold">You won't be charged yet</p>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listing: state.booking.listing,
    blockedDays: state.booking.blockedDays
  };
}


export default connect(mapStateToProps, { getUnit, getBlockedDays })(CheckAvailabilityModal)