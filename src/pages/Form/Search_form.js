import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const HomeToolTip = () => {
  return (
    <span style={{ color: "white" }}>
      Revenue projection based on market research of units your sized performing
      in the 75th percentile in Stinson Beach. Reach out for a detailed revenue
      projection.
    </span>
  );
};

export class Search_form extends Component {
  render() {
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
          <div className="row">
            <div className="col-md-6 mt-15">
              <input
                type="text"
                className="form-control form_text"
                id="your_name"
                placeholder="Type of Place"
              />
            </div>
            <div className="col-md-6 mt-15">
              <input
                type="text"
                className="form-control form_text"
                id="your_email"
                placeholder="Number of guests"
              />
            </div>
          </div>
          <div className="col-md-12 price_tag">
            <br />
            <span className="form_price">$3333</span>
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

export default Search_form;
