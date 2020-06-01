import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { setHoverId } from "../../../../store/actions/googleMapActions";
import { connect } from "react-redux";

class ListingCard extends Component {
  handleMouseEnter = id => {
    this.props.setHoverId(id);
    console.log("Mouse Entter", id);
  };
  handleMouseLeave = () => {
    this.props.setHoverId("");
    console.log("Mouse Leave");
  };
  render() {
    const { unitData } = this.props;
    const {
      Name,
      WeekdayRate,
      Title,
      NumReviews,
      AvgReviews,
      URL,
      Id,
    } = unitData;
    const unitPathName = Name.replace(/ /g, "_");

    return (
      <NavLink
        className={this.props.showMap ? "card-n-50" : "card-n"}
        to={{
          pathname: "/" + unitPathName,
          state: { unitName: Name },
        }}
        onMouseEnter={() => {
          this.handleMouseEnter(Id);
        }}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="card card-blog">
          <div className="rent-card-body mt-40">
            <div className="rent-flex">
              <div className="card-cover-n">
                <div
                  className="card-cover-n card-cover-large-n book"
                  style={{ backgroundImage: `url(${URL})` }}
                ></div>
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

export default connect(null, { setHoverId })(ListingCard);
