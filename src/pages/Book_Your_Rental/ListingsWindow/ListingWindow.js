import React, { Component } from "react";
import { getActiveUnits } from "../../../store/actions/bookingActions";
import { closeMap } from "../../../store/actions/googleMapActions";
import { connect } from "react-redux";
import ListingCard from "./ListingCard/ListingCard";
import GoogleMap from "../../Map/GoogleMap";

class ListingWindow extends Component {
  componentDidMount() {
    this.props.getActiveUnits();
  }
  render() {
    const { units } = this.props;
    return (
      <section className="book-rental-inner">
        <div
          className={`${
            this.props.showMap ? "googleContainerStyle row" : "container-n"
          }`}
        >
          <div className={`${this.props.showMap ? "col-md-6" : ""}`}>
            <div className="rent-title">
              <h3 className="title text-left">Top Rated Places to Stay</h3>
            </div>
            <div className="card-wrapper-n">
              {units.map((unit, index) => {
                return (
                  <ListingCard
                    unitData={unit}
                    key={index}
                    showMap={this.props.showMap}
                  />
                );
              })}
            </div>
          </div>
          {this.props.showMap && (
            <div className="col-md-6 google-map-nav">
              <GoogleMap units={units} />
              <div className="map-control-box">
                <div
                  className="map-close-btn"
                  onClick={() => {
                    this.props.closeMap();
                  }}
                >
                  <i className="fa fa-remove"></i>
                </div>
                <div className="map-search">
                  <h6>
                    <input type="checkbox" /> Search As I Move The Map
                  </h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    units: state.booking.units,
    showMap: state.googleMap.mapState,
  };
};

export default connect(mapStateToProps, { getActiveUnits, closeMap })(
  ListingWindow
);
