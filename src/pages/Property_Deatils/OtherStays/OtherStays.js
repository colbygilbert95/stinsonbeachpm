import React, { Component } from "react";
import { getActiveUnits } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import OtherStayCard from "./OtherStayCard/OtherStayCard"

class OtherStays extends Component {
  componentDidMount() {
    this.props.getActiveUnits();
  }
  render() {
    const { units } = this.props
    const displayUnits = units.slice(0, 5)
    return (
      <section className="book-rental-inner mb-70">
        <div className="container-fluid">
          <hr />
          <div className="row row_padding">

            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Other Places to Stay</h3>
              </div>
            </div>
            {

              displayUnits.map((unit, index) => {

                return (<OtherStayCard unitData={unit} key={index} />)
              })}
          </div>
          <div className="row row_padding">
            <div className="col-sm-12">
              <div className="c-footer mtb-15">
                <a href="#">Show more &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    units: state.booking.units
  };
};

export default connect(mapStateToProps, { getActiveUnits })(OtherStays);
