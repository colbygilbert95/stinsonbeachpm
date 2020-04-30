import React, { Component } from "react"
import { connect } from "react-redux"
import { getUnit, getBlockedDays } from "../../store/actions/bookingActions"
import DateRangePickerWrapper from "../Property_Deatils/ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper";
import GuestCalculator from './GuestCalculator'
import { NavLink, withRouter } from 'react-router-dom'


class CheckAvailabilityModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      hasGuests: 0,
      isDateFieldRequired: false,
      isGuestsFieldRequired: false
    }
  }
  handleDateChange = (startDate, endDate) => {
    this.setState({
      startDate,
      endDate
    })
  }
  handleGuestsChange = (hasGuests) => {
    this.setState({
      hasGuests
    })
  }
  reserve = () => {
    let { startDate, endDate, hasGuests } = this.state
    console.log(startDate === null)
    startDate === null || endDate === null ?
      this.setState({ isDateFieldRequired: true }) :
      this.setState({ isDateFieldRequired: false })

    !hasGuests ?
      this.setState({ isGuestsFieldRequired: true }) :
      this.setState({ isGuestsFieldRequired: false })

    if (startDate && endDate && hasGuests) {
      this.setState({
        isDateFieldRequired: false,
        isGuestsFieldRequired: false
      })
      this.props.history.push("/checkout");
    }
  }
  render() {
    const { listing, blockedDays } = this.props;
    return (
      <div>
        {
          (this.props.modalState) &&
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

                <DateRangePickerWrapper blockedDays={blockedDays} handleDateChange={this.handleDateChange} required={this.state.isDateFieldRequired}
                />

                <p className="mt-15"><strong>Guests</strong></p>

                <GuestCalculator onGuestsChange={this.handleGuestsChange} required={this.state.isGuestsFieldRequired}></GuestCalculator>

                <button className="check-availability-btn" onClick={this.reserve}>Reserve</button>
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

export default withRouter(connect(mapStateToProps, { getUnit, getBlockedDays })(CheckAvailabilityModal))

