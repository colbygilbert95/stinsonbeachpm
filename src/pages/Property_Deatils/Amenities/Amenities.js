import React, { Component } from "react";
import { getUnitAmenities } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import AmentityCard from "./AmenityCard.js/AmenityCard";
import { withRouter } from 'react-router';

class Amenties extends Component {
  componentDidMount() {
    let unitName = this.props.location.state
      ? this.props.location.state.unitName
      : window.location.href.split(/([^\/]+$)/)[1].replace("_", " ")
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
      <section className="property-services">
        <div className="container-n">
          <hr />
          <div className="rent-title">
            <h3 className="title text-left"><strong>Amenities</strong></h3>
          </div>
          <div className="card-wrapper-n">
            {amenities.map((amenity, index) => {
              return <AmentityCard key={index} url={amenity.IconURL} name={amenity.Name}/>;
            })}
            <div className="card-n" onClick={() => this.props.history.push('/amenity-details')}>
              <div className="card-cover-n show-all amentity-cover">
                Show All >
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    amenities: state.booking.amenities
  };
};

export default withRouter(connect(mapStateToProps, { getUnitAmenities })(Amenties));
