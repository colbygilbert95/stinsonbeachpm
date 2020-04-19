import React, { Component } from "react";
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import DateRangePickerWrapper from "./DateRangePickerWrapper/DateRangePickerWrapper";
import CardSection from "./CardSection"
import CheckAvailabilityModal from '../../Check_availability/CheckAvailabilityModal'

class ListingDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false
    }
  }
  openCheckAvailabilityModal = () => {
    this.setState({
      modalState: true
    })
  }

  closeModal = () => {
    this.setState({ modalState: false })
  }
  render() {
    const { listing, blockedDays } = this.props;
    const description =
      listing.Description === undefined ? "" : listing.Description;
    const space = listing.Space === undefined ? "" : listing.Space;
    return (
      <section className="check-availability-second mt-15">
        <CheckAvailabilityModal modalState={this.state.modalState} closeModal={this.closeModal} />
        <div className="container-fluid">
          <div className="row row_padding mt-40">
            <div className="col-sm-8 mt-15">
              <div className="bed-list">
                <div className="bed-inner">
                  <ul>
                    <li>{listing.Accommodates} Guests</li>
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
            <div className="col-sm-4 mt-15">
              <div>
                <div className="mt-15 mb-15"><strong>$145</strong> / night</div>
                <button className="learn-btn" onClick={this.openCheckAvailabilityModal}>Check Availability</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListingDescription;
