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
        <div className="container-n">
          <div className="rent-title">
            <h3 className="title text-left">Tour This Guesthouse</h3>
          </div>
          <div className="card-wrapper-n">
            {roomImgs.map((room, index) => {
              return <ImageCard key={index} url={room.URL} room={room.Name} />;
            })}
          </div>
          <a href="#" className="explore-all">Explore All Guesthouse</a>
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
