import React, { Component } from "react";

class AmentityCard extends Component {
  render() {
    const { url, name } = this.props;
    return (
      <div className="card-n">
        {(name === 'Dryer' && url.length == 0)
          ?
          <div className="card-cover-n amentity-cover" style={{ backgroundImage: `url('https://cdn.onlinewebfonts.com/svg/img_431641.png')` }}>
          </div>
          :
          <div className="card-cover-n amentity-cover" style={{ backgroundImage: `url(${url})` }}>
          </div>
        }
        <p className="card-title-n">
          <strong>{name}</strong>
        </p>
      </div>
    );
  }
}

export default AmentityCard;
