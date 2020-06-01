import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
 
class ImageCard extends Component {
  showGallery = (e) => {
    e.preventDefault()
    this.props.history.push('/gallery')
  }
  render() {
    const { url, room } = this.props;
    return (
      <div className="card-n">
        <a href="#" onClick={(e) => this.showGallery(e)}>
          <div className="card-cover-n" style={{ backgroundImage: `url(${url})` }}></div>
        </a>
        <p className="card-title-n">
          <strong>{room}</strong>
        </p>
      </div>
    );
  }
}

export default withRouter(ImageCard);
