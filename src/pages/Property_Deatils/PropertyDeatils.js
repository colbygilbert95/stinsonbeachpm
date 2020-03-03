import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { getUnit, getBlockedDays } from "../../store/actions/bookingActions";
import { NavLink } from "react-router-dom";
import Reviews from "./Reviews/Reviews";
import ListingImages from "./ListingImages/ListingImages";
import HeaderImages from "./HeaderImages/HeaderImages";
import ListingDescription from "./ListingDescription/ListingDescription";
import Amenties from "./Amenities/Amenities";
import Location from "./Location/Location";
import MeetOwner from "./MeetOwner/MeetOwner";
import Rules from "./Rules/Rules";
import OtherStays from "./OtherStays/OtherStays";
import 'react-dates/initialize';
import DayPickerRangeControllerWrapper from "./DayPickerControllerWrapper/DayPickerControllerWrapper";
import DateRangePickerWrapper from "./ListingDescription/DateRangePickerWrapper/DateRangePickerWrapper";


class PropertyDetails extends Component {
  componentDidMount() {
    const { unitName } = this.props.location.state;
    if (!unitName) {
      unitName = window.location.href.split(/([^\/]+$)/);
    }
    this.props.getUnit(unitName);
    this.props.getBlockedDays(unitName)
  }
  render() {
    console.log("PropertyDetails");
    console.log(this.props);
    const { listing, blockedDays } = this.props;
    // const {
    //   Title,
    //   Bedrooms,
    //   Beds,
    //   Baths,
    //   Accommodates,
    //   PropertyType,
    //   Checkout,
    //   Checkin,
    //   Description,
    //   Space,
    //   GuestAccess,
    //   OtherNotes,
    //   Location,
    //   GuestInteraction,
    //   HouseRules,
    //   NumReviews,
    //   AvgReviews,
    //   PolicyName,
    //   PolicyDescription
    // } = this.props.listing;
    return (
      <div>
        <Header />
        <HeaderImages title={listing.Title} unitName={listing.Name} />

        <ListingDescription listing={listing} blockedDays={blockedDays} />
        <hr />
        <ListingImages unitName={listing.Name} />
        <Amenties unitName={listing.Name} />
        <Location listing={listing} />
        <Reviews
          unitName={listing.Name}
          numReviews={listing.NumReviews}
          avgReviews={listing.AvgReviews}
        />
        <div className="row row_padding">
          <div className="col-md-7">
            <DayPickerRangeControllerWrapper blockedDays={blockedDays} />
          </div>
          <div className="col-md-5">
            <DateRangePickerWrapper blockedDays={blockedDays} />
          </div>
        </div>
        <MeetOwner unitName={listing.Name} />
        <hr />
        <Rules listing={listing} />
        <OtherStays />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listing: state.booking.listing,
    blockedDays: state.booking.blockedDays
  };
};

export default connect(mapStateToProps, { getUnit, getBlockedDays })(PropertyDetails);
