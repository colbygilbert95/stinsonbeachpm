import React, { Component } from "react";

class AmentityCard extends Component {
  render() {
    const { url, name } = this.props;
    console.log("url")
    console.log(this.props)
    return (
      <div className="col-sm-3">
        <div className="property-services-box text-center">
          <div >
            <img src={url} className="property-services-box-inner light-bg"  />
          </div>
          <p>
            <strong>{name}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default AmentityCard;
