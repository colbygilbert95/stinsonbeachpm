import React, { Component } from "react";
import { getRoomHeaderImgs } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import ImageCard from "./ImageCard/ImageCard";

class ListingImages extends Component {
  componentDidMount() {
    const { unitName } = this.props;
    this.props.getRoomHeaderImgs(unitName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.unitName != this.props.unitName) {
      const { unitName } = this.props;
      this.props.getRoomHeaderImgs(unitName);
    }
  }
  render() {
    let { roomImgs } = this.props;
    if (roomImgs === undefined) {
      roomImgs = [];
    }
    return (
      <section className="property-services">
        <div className="container-fluid">
          <div className="row row_padding">
            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Tour This Guesthouse</h3>
              </div>
            </div>
          </div>
          <div className="otherPlacesWrapper">
            {roomImgs.map((room, index) => {
              return <ImageCard key={index} url={room.URL} room={room.Name} />;
            })}

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
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    roomImgs: state.booking.roomImgs
  };
};

export default connect(mapStateToProps, { getRoomHeaderImgs })(ListingImages);
