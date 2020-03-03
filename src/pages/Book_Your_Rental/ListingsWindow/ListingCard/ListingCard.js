import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListingCard extends Component {
  render() {
    const { unitData } = this.props;
    const { Name, WeekdayRate, Title, NumReviews, AvgReviews, URL } = unitData;
    const unitPathName = Name.replace(/ /g, "_");
    return (
      <div className="col-sm-12 col-md-4 col-lg-3">
        <NavLink
          to={{
            pathname: "/" + unitPathName,
            state: { unitName: Name }
          }}
        >
          <div className="card card-blog">
            <div className="rent-card-body">
              <div className="rent-flex">
                <div className="author">
                  <img
                    className="author-picture "
                    src={URL}
                    alt={Name + " Stinson Beach Header Photo"}
                  />
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
      </div>
    );
  }
}

export default ListingCard;
