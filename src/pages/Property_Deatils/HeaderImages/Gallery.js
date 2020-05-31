import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';

export class Gallery extends Component {
  renderThumbs = () =>
    <ul>
      {
        [1, 2].map((item, i) =>
          <li key={i} onClick={() => this.Carousel._onDotClick(i)}>Thumb {item}</li>)
      }
    </ul>;

  render() {
    return (
      <div>
        <AliceCarousel showSlideIndex={true} ref={ el => this.Carousel = el }>
          <img src="/images/villa.jpg" className="yours-custom-class" />
          <img src="/images/bg-1.png" className="yours-custom-class" />
        </AliceCarousel>
        {this.renderThumbs()}
      </div>
    )
  }
}

export default Gallery