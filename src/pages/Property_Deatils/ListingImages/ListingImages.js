import React, { Component } from "react";
import { getRoomHeaderImgs } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import ImageCard from "./ImageCard/ImageCard";
import { withRouter } from 'react-router-dom'

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
            <h3 className="title text-left"><strong>Tour This Guesthouse</strong></h3>
          </div>
          <div className="card-wrapper-n">
            {roomImgs.map((room, index) => {
              return <ImageCard key={index} url={room.URL} room={room.Name} />;
            })}
            <div className="card-n" onClick={() => this.props.history.push('/take-tour')}>
              <div className="card-cover-n show-all amentity-cover">
                Show All >
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

export default withRouter(connect(mapStateToProps, { getRoomHeaderImgs })(ListingImages));
