import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { url, room } = this.props;
    return (
      <div className="place">
        <div className="property-services-box text-center">
          <div className="property-services-box-inner">
            <img className="property-services-box-inner" src={url} />
          </div>
          <p>
            <strong>{room}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default ImageCard;
