import React, { Component } from "react"
import { connect } from "react-redux"
import { getUnit, getBlockedDays , setTotalGuests , setDates } from "../../store/actions/bookingActions"
import DateRangePickerWrapper from "../Property_Deatils/ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper";
import GuestCalculator from './GuestCalculator'
import TotalCalculator from './TotalCalculator/TotalCalculator'
import { NavLink, withRouter } from 'react-router-dom'
import momentPropTypes from "react-moment-proptypes";


class CheckAvailabilityModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: momentPropTypes.momentObj,
      endDate: momentPropTypes.momentObj,
      hasGuests: 0,
      total:0,
      isDateFieldRequired: false,
      isGuestsFieldRequired: false
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }
  handleDateChange = (startDate, endDate) => {
    this.setState({
      startDate,
      endDate
    })
  }
  handleGuestsChange = (hasGuests , total) => {
    this.setState({
      hasGuests,
      total
    })
  }
  reserve = () => {
    let { startDate, endDate, hasGuests } = this.state
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
      } , () => {
        window.localStorage.setItem('listing' , JSON.stringify(this.props.listing))
        this.props.setTotalGuests(this.state.total)
        this.props.setDates({startDate: startDate.format('DD/MM/YYYY') ,endDate : endDate.format('DD/MM/YYYY')})
        this.props.history.push("/checkout");
      })
    }
  }
  render() {
    const { startDate, endDate } = this.state;
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

                <p className="mt-15">
                  <strong>Guests</strong>
                </p>

                <GuestCalculator maxGuests={this.props.maxGuests} onGuestsChange={this.handleGuestsChange} required={this.state.isGuestsFieldRequired}></GuestCalculator>
                {(this.state.startDate !== momentPropTypes.momentObj && this.state.endDate !== momentPropTypes.momentObj) ? (
                  <TotalCalculator listing={listing} startDate={startDate} endDate={endDate} />
                ) : null}
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
const mapDispatchtoProps = dispatch => ({
  setTotalGuests: total => dispatch(setTotalGuests(total)),
  setDates: total => dispatch(setDates(total)),
  getUnit,
  getBlockedDays
})

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(CheckAvailabilityModal))