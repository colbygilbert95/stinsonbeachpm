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
    //const {amenites} = this.props
    return (
      <section className="property-services">
        <div className="container-fluid">
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Amenities</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {amenities.map((amenity, index) => {
              return <AmentityCard key={index} url={amenity.IconURL} name={amenity.Name} />;
            })}
             <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner bg-white">
                  <div className="c-footer mtblr">
                    <a href="#">Show All &gt;</a>
                  </div>
                </div>
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
