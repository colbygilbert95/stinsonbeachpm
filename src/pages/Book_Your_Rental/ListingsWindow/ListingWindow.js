import React, { Component } from "react";
import { getActiveUnits } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import ListingCard from "./ListingCard/ListingCard";

class ListingWindow extends Component {
  state = {
    showMap: false,
  };
  componentDidMount() {
    this.props.getActiveUnits();
  }
  render() {
    const { units } = this.props;
    return (
      <section className="book-rental-inner">
        <div
          className={`${
            this.state.showMap ? "googleContainerStyle row" : "container-n"
          }`}
        >
          <div className={`${this.state.showMap ? "col-md-6" : ""}`}>
            <div className="rent-title">
              <h3 className="title text-left"><strong>Top Rated Places to Stay</strong></h3>
            </div>
            <div className="card-wrapper-n">
              {units.map((unit, index) => {
                return <ListingCard unitData={unit} key={index} />;
              })}
            </div>
          </div>
          {this.state.showMap ? (
            <div className="col-md-6 google-map-nav">Goggle Map</div>
          ) : null}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    units: state.booking.units,
  };
};

export default connect(mapStateToProps, { getActiveUnits })(ListingWindow);
