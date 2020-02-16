import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class OtherStayCard extends Component {
  render() {
    const { unitData } = this.props;
    const { Name, WeekdayRate, Title, NumReviews, AvgReviews } = unitData;
    const unitPathName = Name.replace(/ /g, "_");
    return (
      <NavLink
        to={{
          pathname: "/" + unitPathName,
          state: { unitName: Name }
        }}
      >
        <div className="col-md-4 col-lg-3">
          <div className="card card-blog">
            <div className="rent-card-body">
              <div className="rent-flex">
                <div className="author">
                  <img
                    className="author-picture "
                    src={
                      "images/property_images/" +
                      unitPathName +
                      "/" +
                      unitPathName +
                      "_Cover.jpg"
                    }
                    alt="..."
                  />
                </div>
              </div>
              <p>{Title}</p>
              <p>
                <strong>${WeekdayRate}</strong> / night
              </p>
              <a href="javascript:;" className="pull-left">
                <i className="fa fa-star mr-2"></i>
                <span className="small">
                  <strong>{AvgReviews}</strong> ({NumReviews})
                </span>
              </a>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default OtherStayCard;
