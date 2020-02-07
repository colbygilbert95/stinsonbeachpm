import React, { Component } from 'react';

class Amenties extends Component {
    state = {  }
    render() { 
        return ( <section className="property-services">
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
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/cooking.svg" /> */}
                </div>
                <p>
                  <strong>Full kitchen</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/008-wifi.svg" /> */}
                </div>
                <p>
                  <strong>Wifi</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/009-tv.svg" /> */}
                </div>
                <p>
                  <strong>TV</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/007-bathtub.svg" /> */}
                </div>
                <p>
                  <strong>Bathroom essentials</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/001-pillow.svg" /> */}
                </div>
                <p>
                  <strong>Bedroom comforts</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/002-coffee-maker.svg" /> */}
                </div>
                <p>
                  <strong>Coffee maker</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner light-bg">
                  {/* <img src="images/icons/Product details/004-parking.svg" /> */}
                </div>
                <p>
                  <strong>Free street parking</strong>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="property-services-box text-center">
                <div className="property-services-box-inner bg-white">
                  <div className="c-footer mtblr">
                    <a href="#">Show more &gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> );
    }
}
 
export default Amenties;