import React, { Component } from "react";
import { connect } from "react-redux";
import { openMap, setCenter } from "../../../store/actions/googleMapActions";

class FilterOptions extends Component {
  render() {
    return (
      <section className="book-your--top">
        <div className="flex justify-between p-30 flex-wrap">
          <ul className="single-post-link mt-15">
            <li>
              <a href="#">Date</a>
            </li>
            <li>
              <a href="#">Guests</a>
            </li>
            <li>
              <a href="#">Price</a>
            </li>
            <li>
              <a href="#">Type of Place</a>
            </li>
            <li>
              <a href="#">More Filters</a>
            </li>
          </ul>
          {!this.props.map && (
            <div
              className="Show-Map-btn mt-15"
              onClick={() => {
                this.props.openMap();
              }}
            >
              <span>Show Map</span>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    map: state.googleMap.mapState,
  };
};

export default connect(mapStateToProps, { openMap })(FilterOptions);
