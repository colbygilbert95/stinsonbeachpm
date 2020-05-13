import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class OtherStayCard extends Component {
  render() {
    const { unitData } = this.props;
    const { Name, WeekdayRate, Title, NumReviews, AvgReviews } = unitData;
    const unitPathName = Name.replace(/ /g, "_");
    return (
      <NavLink
        className="card-n card-large-n"
        to={{
          pathname: "/" + unitPathName,
          state: { unitName: Name },
        }}
        onClick={(e) => e.preventDefault()}
      >
        <div className="card card-blog">
          <div className="rent-card-body mt-40">
            <div className="rent-flex">
              <div className="card-cover-n card-cover-large-n" style={{ backgroundImage: `url('images/property_images/${unitPathName}/${unitPathName}_Cover.jpg')` }}></div>
            </div>
            <p className="text-overflow mt-15">{Title}</p>
            <p>
              <strong>${WeekdayRate}</strong> / night
            </p>
            <a href="javascript;" className="pull-left">
              <i className="fa fa-star mr-2"></i>
              <span className="small">
                <strong>{AvgReviews}</strong> ({NumReviews})
              </span>
            </a>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default OtherStayCard;
