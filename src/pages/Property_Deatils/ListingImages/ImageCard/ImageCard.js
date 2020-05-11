import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { url, room } = this.props;
    return (
      <div className="card-n">
          <div className="card-cover-n" style={{backgroundImage: `url(${url})`}}></div>
          <p className="card-title-n">
            <strong>{room}</strong>
          </p>
      </div>
    );
  }
}

export default ImageCard;
