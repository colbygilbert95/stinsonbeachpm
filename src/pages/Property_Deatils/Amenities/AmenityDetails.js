import React, { Component } from 'react'
import AmentityCard from "./AmenityCard.js/AmenityCard";
import { getUnitAmenities } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";

class AmenityDetails extends Component {
  componentDidMount() {
    const { unitName } = this.props;
    this.props.getUnitAmenities(unitName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.unitName != this.props.unitName) {
      const { unitName } = this.props;
      this.props.getUnitAmenities(unitName);
    }
  }
  render() {
    const amenities = this.props.amenities === undefined ? [] : this.props.amenities;
    return (
      <div className="amenity-details-wrapper">
        <div className="header">
          <a href="#" className="back-button">
            <i class="fa fa-chevron-left"></i>
          </a>
        </div>
        <div className="container">
          <div className="list">
            <h1>Special To This Guesthouse</h1>
            <div className="card-wrapper-n">
              {amenities.map((amenity, index) => {
                return <AmentityCard key={index} url={amenity.IconURL} name={amenity.Name} />;
              })}
            </div>
          </div>
          <div className="list">
            <h1>Everything You Need</h1>
          </div>
          <div className="list">
            <h1>Not Included</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    amenities: state.booking.amenities
  };
};

export default connect(mapStateToProps, { getUnitAmenities })(AmenityDetails)