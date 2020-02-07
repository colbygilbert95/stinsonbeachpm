import React, { Component } from 'react';

class ListingDescription extends Component {
    state = {  }
    render() { 
        const { listing } = this.props
        return ( <section className="check-availability-second mt-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="bed-list">
                <div className="bed-inner">
                  <ul>
                    <li>{listing.Accommodates} guests</li>
                    <li>{listing.PropertyType}</li>
                    <li>{listing.Beds} Beds</li>
                    <li>{listing.Baths} Bath</li>
                  </ul>
                </div>
                <p>{listing.Description}</p>
                <p>{listing.Space}</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="notes-side-box border-rds">
                <div className="row">
                  <div className="col-sm-5 border-right">
                    <div className="note-box-inner">
                      <div className="auther-img"></div>
                      <p className="Royal">Royal Condo Vacation</p>
                      <p className="Member">Member since 2014</p>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="notes-side-content">
                      <p>
                        "It is my pleasure to have you comfortably tucked away
                        while getting a chance to unwind, recharge, and drink
                        in the beauty that surrounds you."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> );
    }
}
 
export default ListingDescription;