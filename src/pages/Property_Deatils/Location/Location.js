import React, { Component } from 'react';

class Location extends Component {
  state = {}
  render() {
    const { listing } = this.props
    return (<section className="property-location">
      <div className="container-fluid">
        <hr />
        <div className="row row_padding">
          <div className="col-sm-12">
            <div className="rent-title">
              <h3 className="title text-left"><strong>Location</strong></h3>
            </div>
          </div>
        </div>
        <div className="row row_padding">
          <div className="col-sm-5 mt-15">
            <div className="location-box border-rds">
              <p>
                <strong>Stinson Beach, California, United States</strong>
              </p>
              <p>
                <strong>
                  Distance from San Francisco International Airport
                  </strong>
              </p>
              <p className="font-style-italic">
                66 mins by car without traffic
                </p>
              <p>{listing.Location}</p>
            </div>
          </div>
          <div className="col-sm-7 mt-15">
            <div className="property-location-map">
              <img className="border-rds" src="images/map-2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

export default Location;