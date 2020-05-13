import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListingCard extends Component {
  render() {
    const { unitData } = this.props;
    const { Name, WeekdayRate, Title, NumReviews, AvgReviews, URL } = unitData;
    const unitPathName = Name.replace(/ /g, "_");
    return (
      <NavLink
        className="card-n"
        to={{
          pathname: "/" + unitPathName,
          state: { unitName: Name }
        }}
      >
        <div className="card card-blog">
          <div className="rent-card-body mt-40">
            <div className="rent-flex">
              <div className="card-cover-n">
              <div className="card-cover-n card-cover-large-n" style={{ backgroundImage: `url(${URL})` }}></div>
              </div>
              <div className="like">
                <a href="javascript:;" className="pull-right">
                  <i className="fa fa-star mr-2"></i>
                  <span className="small">
                    <strong>{AvgReviews}</strong>({NumReviews})
                    </span>
                </a>
              </div>
            </div>
            <p className="text-overflow">{Title}</p>
            <p>
              <strong>${WeekdayRate}</strong> / night
              </p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default ListingCard;
