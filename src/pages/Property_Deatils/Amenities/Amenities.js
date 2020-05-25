import React, { Component } from "react";
import { getUnitAmenities } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import AmentityCard from "./AmenityCard.js/AmenityCard";

class Amenties extends Component {
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
    const amenities =
      this.props.amenities === undefined ? [] : this.props.amenities;
    return (
      <section className="property-services">
        <div className="container-n">
          <hr />
          <div className="rent-title">
            <h3 className="title text-left">Amenities</h3>
          </div>
          <div className="card-wrapper-n">
            {amenities.map((amenity, index) => {
              return <AmentityCard key={index} url={amenity.IconURL} name={amenity.Name} />;
            })}
            <div className="card-n">
              <div className="card-cover-n show-all amentity-cover">
                Show All >
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
    amenities: state.booking.amenities
  };
};

export default connect(mapStateToProps, { getUnitAmenities })(Amenties);
