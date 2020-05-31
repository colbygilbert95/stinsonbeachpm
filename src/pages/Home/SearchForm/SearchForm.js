import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Select from "react-select";
import HomeGetStartedModal from "../../Modal";
import { setSelectedvalue } from "../../../store/actions/sendMessageActions";
const revenueData = require("./revenueData.json");

const HomeToolTip = () => {
  return (
    <span style={{ color: "white" }}>
      Revenue projection based on market research of units your sized performing
      in the 75th percentile in Stinson Beach. Reach out for a detailed revenue
      projection.
    </span>
  );
};

const TypeofPlaceOptions = [
  { id: "selectedType", value: "Entire home", label: "Entire home" },
  { id: "selectedType", value: "Private room", label: "Private room" },
  { id: "selectedType", value: "Shared room", label: "Shared room" },
];

const NumberOfGuestOptions = [
  { id: "selectedGuest", value: "1", label: "1 guest" },
  { id: "selectedGuest", value: "2", label: "2 guests" },
  { id: "selectedGuest", value: "3", label: "3 guests" },
  { id: "selectedGuest", value: "4", label: "4 guests" },
  { id: "selectedGuest", value: "5", label: "5 guests" },
  { id: "selectedGuest", value: "6", label: "6 guests" },
  { id: "selectedGuest", value: "7", label: "7 guests" },
  { id: "selectedGuest", value: "8", label: "8 guests" },
  { id: "selectedGuest", value: "9", label: "9 guests" },
  { id: "selectedGuest", value: "10", label: "10 guests" },
  { id: "selectedGuest", value: "11", label: "11 guests" },
  { id: "selectedGuest", value: "12", label: "12 guests" },
  { id: "selectedGuest", value: "13", label: "13 guests" },
  { id: "selectedGuest", value: "14", label: "14 guests" },
  { id: "selectedGuest", value: "15", label: "15 guests" },
  { id: "selectedGuest", value: "16", label: "16 guests" },
];

class SearchForm extends Component {
  state = {
    typeOfPlace: null,
    numberOfGuest: null,
  };

  handleTypeChange = selectedOption => {
    this.setState({ typeOfPlace: selectedOption.label });
  };

  handleNumberChange = selectedOption => {
    this.setState({ numberOfGuest: parseInt(selectedOption.label) });
  }

  calculateRevenue = (typeOfPlace, numberOfGuest) => {
    if (typeOfPlace == null || numberOfGuest == null) {
      return "---- ";
    }
    
    const weekend = revenueData[typeOfPlace][numberOfGuest];
    const weekday = weekend * 0.89;
    const orphan = weekend * 0.74;

    const avgDay = (weekend * 2 + weekday * 3 + orphan * 2) / 7;
    const avgMonth = avgDay * 22;
    return Math.round(avgMonth);
  };

  render() {
    const { typeOfPlace, numberOfGuest } = this.state;
    return (
      <div className="get-appointment-form mb-50">
        <h3>Vacation Home Managment</h3>
        <p>Earn $5000 More Or We Pay You</p>
        <p className="mtb">
          <span className="pull-left">Revenue Guarantee</span>
          <span className="pull-right">
            <NavLink to="/Guarantee">Learn More</NavLink>
          </span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <span>Find out what you could earn</span>
        <br />
        <br />
        <>
          <div className="row m">
            <div className="col-md-6 col-xs-6 mt-15">
              <Select
                placeholder={"Type Of Place"}
                options={TypeofPlaceOptions}
                onChange={this.handleTypeChange}
                className="form_select"
                onChange={this.props.change}
              />
            </div>
            <div className="col-md-6 col-xs-6 mt-15">
              <Select
                placeholder={"Number of guests"}
                options={NumberOfGuestOptions}
                onChange={this.handleNumberChange}
                className="form_select"
                onChange={this.props.change}
              />
            </div>
          </div>
          <div className="col-md-12 price_tag">
            <br />
            <span className="form_price">
              ${this.calculateRevenue(typeOfPlace, numberOfGuest)}{" "}
            </span>
            <span className="form_label">
              {" "}
              per month{" "}
              <Tippy content={<HomeToolTip />} placement="bottom">
                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
              </Tippy>
            </span>
            <br />
          </div>
          <div className="text-center">
            <button
              data-toggle="modal"
              data-target="#modalGetStarted"
              className="btn btn-primary cu-btn"
            >
              Get Started
            </button>
          </div>
        </>

        <HomeGetStartedModal title="Send us message" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    change: event => {
      dispatch(setSelectedvalue(event));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
