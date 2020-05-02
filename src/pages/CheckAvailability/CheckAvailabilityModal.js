import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnit, getBlockedDays } from "../../store/actions/bookingActions";
import DateRangePickerWrapper from "../Property_Deatils/ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper";
import GuestCalculator from "../Check_availability/GuestCalculator/GuestCalculator";
import { NavLink } from "react-router-dom";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";
import TotalCalculator from "../Check_availability/TotalCalculator/TotalCalculator";

class CheckAvailabilityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: momentPropTypes.momentObj,
      endDate: momentPropTypes.momentObj,
    };
    this.startDateCallback = this.startDateCallback.bind(this);
    this.endDateCallback = this.endDateCallback.bind(this);
  }

  startDateCallback = (date) => {
    this.setState({ startDate: date });
  };

  endDateCallback = (date) => {
    this.setState({ endDate: date });
  };

  render() {
    const {startDate, endDate} = this.state;
    const { listing, blockedDays } = this.props;
    return (
      <div>
        {this.props.modalState && (
          <div>
            <div className="overlay"></div>
            <div className="check-availability-wrapper">
              <div className="content">
                <button className="remove-btn" onClick={this.props.closeModal}>
                  <i className="fa fa-remove"></i>
                </button>
                <div className="price">
                  <strong>${listing.WeekdayRate} </strong> / night
                </div>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <strong>{listing.AvgReviews}</strong> ({listing.NumReviews})
                </div>
                <p>
                  <strong>Dates</strong>
                </p>
                <DateRangePickerWrapper
                  blockedDays={blockedDays}
                  startDateCallback={this.startDateCallback}
                  endDateCallback={this.endDateCallback}
                />
                <p className="mt-15">
                  <strong>Guests</strong>
                </p>
                <GuestCalculator></GuestCalculator>
                {(this.state.startDate !== momentPropTypes.momentObj && this.state.startDate !== momentPropTypes.momentObj) ? (
                  <TotalCalculator listing={listing} startDate={startDate} endDate={endDate}/>
                ) : null}
                <NavLink className="check-availability-btn" to="/checkout">
                  Reserve
                </NavLink>
                <p className="text-center mt-10 font-bold">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listing: state.booking.listing,
    blockedDays: state.booking.blockedDays,
  };
};

export default connect(mapStateToProps, { getUnit, getBlockedDays })(
  CheckAvailabilityModal
);
