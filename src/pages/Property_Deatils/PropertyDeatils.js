import React, { Component } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { connect } from "react-redux"
import { getUnit, getBlockedDays , openModal , setDates } from "../../store/actions/bookingActions"
import { NavLink } from "react-router-dom"
import Reviews from "./Reviews/Reviews"
import ListingImages from "./ListingImages/ListingImages"
import HeaderImages from "./HeaderImages/HeaderImages"
import ListingDescription from "./ListingDescription/ListingDescription"
import Amenties from "./Amenities/Amenities"
import Location from "./Location/Location"
import MeetOwner from "./MeetOwner/MeetOwner"
import Rules from "./Rules/Rules"
import OtherStays from "./OtherStays/OtherStays"
import "react-dates/initialize"
import DayPickerRangeControllerWrapper from "./DayPickerControllerWrapper/DayPickerControllerWrapper"
import DateRangePickerWrapper from "./ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper"

class PropertyDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: null,
      end_date: null
    }
  }
  componentDidMount() {
    let unitName = this.props.location.state
      ? this.props.location.state.unitName
      : window.location.href.split(/([^\/]+$)/)[1].replace("_", " ")
    this.props.getUnit(unitName)
    this.props.getBlockedDays(unitName)
  }
  changeDates = (start_date, end_date) => {
    this.setState(
      {
        start_date,
        end_date
      },
      () => {
        if(end_date){
          this.props.openModal()
          this.props.setDates({
            startDate: start_date ,
            endDate : end_date
          })
        }
      }
    )
  }
  render() {
    const { listing, blockedDays } = this.props
    return (
      <div>
        <Header />
        <HeaderImages title={listing.Title} unitName={listing.Name} />
        <ListingDescription listing={listing} blockedDays={blockedDays} />
        <hr />
        <ListingImages unitName={listing.Name} />
        <Amenties unitName={listing.Name} />
        <Location listing={listing} />
        <Reviews unitName={listing.Name} numReviews={listing.NumReviews} avgReviews={listing.AvgReviews} />
        <div className="container-fluid">
          <div className="row row_padding">
            <div className="col-md-12 col-lg-7 mt-15">
              <DayPickerRangeControllerWrapper
                blockedDays={blockedDays}
                onDateChange={this.changeDates}
              />
            </div>
          </div>
        </div>
        <MeetOwner unitName={listing.Name} />
        <hr />
        <Rules listing={listing} />
        <OtherStays />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listing: state.booking.listing,
    blockedDays: state.booking.blockedDays
  }
}

export default connect(mapStateToProps, { getUnit, getBlockedDays , openModal , setDates })(
  PropertyDetails
)
