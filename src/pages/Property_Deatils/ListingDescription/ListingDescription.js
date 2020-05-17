import React, { Component } from "react"
import "react-dates/initialize"
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates"
import DateRangePickerWrapper from "./DateRangePickerWrapper/DateRangePickerWrapper"
import CardSection from "./CardSection"
import CheckAvailabilityModal from "../../Check_availability/CheckAvailabilityModal"
import { connect } from 'react-redux'
import { openModal } from '../../../store/actions/bookingActions'

class ListingDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exapnded: false
    }
  }
  openCheckAvailabilityModal = () => {
		this.props.openModal()
	}

  readMoreBtn = () => {
    this.setState({
      ...this.state,
      expanded: this.state.expanded ? false : true
    })
  }

  render() {
    const { listing, blockedDays } = this.props
    const description =
      listing.Description === undefined ? "" : listing.Description
    const space = listing.Space === undefined ? "" : listing.Space
    return (
      <section className="check-availability-second mt-15">
        <CheckAvailabilityModal
          maxGuests={listing.Accommodates}
        />
        <div className="container-n">
          <div className="row  mt-40">
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
                    )
                  })}
                </span>
                <div
                  className={`read-more mt-20 ${
                    this.state.expanded ? "hidden" : ""
                  }`}
                  onClick={this.readMoreBtn}
                >
                  <a>Read More</a>
                  <div class="arrow"></div>
                </div>
                <scetion
                  className={`fade-in ${this.state.expanded ? "" : "hidden"}`}
                >
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
                      )
                    })}
                  </span>
                  <div
                    className="read-more-hide mt-10 "
                    onClick={this.readMoreBtn}
                  >
                    <a>Hide The Space</a>
                    <div class="down-arrow"></div>
                   </div>
                </scetion>
                <span>
                  <br />
                  <strong>Any questions?</strong>
                  <br />
                </span>
                <p className="contact-with-host-btn">
                  <a href="#">Contact</a>
                </p>
              </div>
            </div>
            <div className="col-sm-4 mt-15">
              <div>
                <div className="mt-15 mb-15">
                  <strong>${listing.WeekdayRate}</strong> / night
                </div>
                <button
                  className="learn-btn"
                  onClick={this.openCheckAvailabilityModal}
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(null , {openModal})(ListingDescription)
