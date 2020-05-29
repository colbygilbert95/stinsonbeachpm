import React, { Component } from 'react'
import AmentityCard from "./AmenityCard.js/AmenityCard";
import { getUnitAmenities } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

class AmenityDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      amenities: JSON.parse(localStorage.getItem('amenities'))
    }
  }
  returnBack = (e) => {
    e.preventDefault()
    this.props.history.goBack()
  }
  render() {
    const amenities = this.state.amenities
    return (
      <div className="amenity-details-wrapper">
        <div className="header">
          <a href="#" className="back-button" onClick={this.returnBack}> 
            <img src="/images/back-arrow.png"/>
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

export default withRouter(connect(mapStateToProps, { getUnitAmenities })(AmenityDetails))