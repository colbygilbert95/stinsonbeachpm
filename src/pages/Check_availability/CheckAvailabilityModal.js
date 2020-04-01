import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnit, getBlockedDays } from "../../store/actions/bookingActions";
import DateRangePickerWrapper from "../Property_Deatils/ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper";
import GuestCalculator from './GuestCalculator'


class CheckAvailabilityModal extends Component {
  componentDidMount() {
    const { unitName } = this.props.location.state;
    if (!unitName) {
      unitName = window.location.href.split(/([^\/]+$)/);
    }
    this.props.getUnit(unitName);
    this.props.getBlockedDays(unitName)
  }
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
                {/* <select class="form-control mt-30 gusts-slect-menu mt0">
                  <option>Guests</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select> */}
                <button className="check-availability-btn">Check Availability</button>
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