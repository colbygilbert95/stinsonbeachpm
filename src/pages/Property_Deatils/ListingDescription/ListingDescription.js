import React, { Component } from "react";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import DateRangePickerWrapper from "./DateRangePickerWrapper/DateRangePickerWrapper";
import CardSection from "./CardSection"

class ListingDescription extends Component {
  render() {
    const { listing, blockedDays } = this.props;
    const description =
      listing.Description === undefined ? "" : listing.Description;
    const space = listing.Space === undefined ? "" : listing.Space;
    return (
      <section className="check-availability-second mt-15">

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="bed-list">
                <div className="bed-inner">
                  <ul>
                    <li>{listing.Accommodates} guests</li>
                    <li>{listing.PropertyType}</li>
                    <li>{listing.Beds} Beds</li>
                    <li>{listing.Baths} Bath</li>
                  </ul>
                </div>

                <span>
                  {description.split(/\n/i).map((text, index) => {
                    return (
                      <React.Fragment key={index}>
                        {text}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </span>
                <span>
                  <br />
                  <strong>The Space</strong>
                  <br />
                </span>
                <span>
                  {space.split(/\n/i).map((text, index) => {
                    return (
                      <React.Fragment key={index}>
                        {text}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </span>
                <span><br /><strong>Any questions for the host?</strong><br /></span>
                <p className="contact-with-host-btn">
                  <a href="#">Contact</a>
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="notes-side-box border-rds">

                {/* <p className="contact-with-host-btn">
                  <a href="#">Contact</a>
                </p> */}
                <DateRangePickerWrapper blockedDays={blockedDays} />
                <div>
                  <div className="mt-15 mb-15"><strong>$145</strong> / night</div>
                  <button className="learn-btn">Check Availability</button>
                </div>
                {/* <div className="row">
                  <div className="col-sm-5 border-right">
                    <div className="note-box-inner">
                      <div className="auther-img"></div>
                      <p className="Royal">Royal Condo Vacation</p>
                      <p className="Member">Member since 2014</p>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="notes-side-content">
                      <p>
                        "It is my pleasure to have you comfortably tucked away
                        while getting a chance to unwind, recharge, and drink in
                        the beauty that surrounds you."
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListingDescription;
