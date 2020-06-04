import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  setHoverId,
  setListingImgs,
} from "../../../../store/actions/googleMapActions";
import { connect } from "react-redux";
import Slider from "react-slick";
import axios from "axios";
import "../ListingCard/ListingCard.css";

const sliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
};
class ListingCard extends Component {
  state = {
    loading: true,
    listingImgs: [],
  };
  componentDidMount() {
    console.log("Call Did Mount");
    const apiUrl = "https://us-central1-stinsonbeachpm.cloudfunctions.net/app";
    axios
      .get(apiUrl + "/getUnitHeaderImgs", {
        params: {
          unitName: this.props.unitData.Name,
        },
      })
      .then(response => {
        this.props.setListingImgs({
          Id: this.props.unitData.Id,
          imgs: response.data,
        });
        this.setState({
          loading: false,
          listingImgs: response.data,
        });
      });
  }

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
    const listingImg = this.state.listingImgs;
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
    console.log(`Listing Images ${Id}--${Name}`, listingImg);

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
                {/* <div
                  className="card-cover-n card-cover-large-n book"
                  style={{ backgroundImage: `url(${URL})` }}
                ></div> */}

                <Slider {...sliderSetting}>
                  {listingImg &&
                    listingImg.map(img => (
                      <div>
                        <div
                          className="card-cover-n card-cover-large-n book"
                          style={{ backgroundImage: `url(${img.URL})` }}
                        ></div>
                      </div>
                    ))}

                  {/* {!listingImg && (
                    <div>
                      <div
                        className="card-cover-n card-cover-large-n book"
                        style={{ backgroundImage: `url(${URL})` }}
                      ></div>
                    </div>
                  )} */}
                  {this.state.loading && (
                    <div>
                      <div
                        className="loading-cover-n card-cover-large-n book"
                        style={{ backgroundImage: `url('images/load.gif')` }}
                      ></div>
                    </div>
                  )}
                </Slider>
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

export default connect(null, { setHoverId, setListingImgs })(ListingCard);
