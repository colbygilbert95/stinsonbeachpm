import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Select from "react-select";
const revenueData = require("./revenueData.json")

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
  { value: "Entire home", label: "Entire home" },
  { value: "Private room", label: "Private room" },
  { value: "Shared room", label: "Shared room" },
];

const NumberOfGuestOptions = [
  
  { value: "2", label: "2 guests" },
  { value: "3", label: "3 guests" },
  { value: "4", label: "4 guests" },
  { value: "5", label: "5 guests" },
  { value: "6", label: "6 guests" },
  { value: "7", label: "7 guests" },
  { value: "8", label: "8 guests" },
  { value: "9", label: "9 guests" },
  { value: "10", label: "10 guests" },
  { value: "11", label: "11 guests" },
  { value: "12", label: "12 guests" },
  { value: "13", label: "13 guests" },
  { value: "14", label: "14 guests" },
  { value: "15", label: "15 guests" },
  { value: "16", label: "16 guests" },
];
 

class SearchForm extends Component {

  state = {
    typeOfPlace: null,
    numberOfGuest: null
  }

  handleTypeChange = (selectedOption) => {
    this.setState({ typeOfPlace: selectedOption.label });
  }

  handleNumberChange = (selectedOption) => {
    this.setState({ numberOfGuest: parseInt(selectedOption.label) });
  }

  calculateRevenue = (typeOfPlace, numberOfGuest) =>{
    if(typeOfPlace == null || numberOfGuest == null) {
      return "---- "
    } 
   console.log(revenueData)
   console.log(revenueData[typeOfPlace][numberOfGuest])
    const weekend = revenueData[typeOfPlace][numberOfGuest]
    const weekday = weekend * .89
    const orphan = weekend * .74

    const avgDay = ((weekend * 2) + (weekday * 3) + (orphan * 2)) / 7
    const avgMonth = avgDay *22
    return Math.round(avgMonth)
    
  }

  

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
        <form>
          <div className="row m">
            <div className="col-md-6 col-xs-6 mt-15">
              <Select
                placeholder={"Type Of Place"}
                options={TypeofPlaceOptions}
                onChange={this.handleTypeChange}
                className="form_select"
              />
            </div>
            <div className="col-md-6 col-xs-6 mt-15">
              <Select
                placeholder={"Number of guests"}
                options={NumberOfGuestOptions}
                onChange={this.handleNumberChange}
                className="form_select"
              />
            </div>
          </div>
          <div className="col-md-12 price_tag">
            <br />
            <span className="form_price">${this.calculateRevenue(typeOfPlace,numberOfGuest)} </span>
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
            <button type="submit" className="btn btn-primary cu-btn">
              Get Started
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
