import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class OtherStayCard extends Component {
  render() {
    const { unitData } = this.props;
    const { Name, WeekdayRate, Title, NumReviews, AvgReviews } = unitData;
    const unitPathName = Name.replace(/ /g, "_");
    return (
      <NavLink
        className="place"
        to={{
          pathname: "/" + unitPathName,
          state: { unitName: Name },
        }}
        onClick={(e) => e.preventDefault()}
      >
        <div className="card card-blog">
          <div className="rent-card-body mt-40">
            <div className="rent-flex">
              <div className="author">
                <img
                  className="author-picture width-unset"
                  src={
                    "images/property_images/" +
                    unitPathName +
                    "/" +
                    unitPathName +
                    "_Cover.jpg"
                  }
                  alt="..."
                  width="250"
                  height="300"
                />
              </div>
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
