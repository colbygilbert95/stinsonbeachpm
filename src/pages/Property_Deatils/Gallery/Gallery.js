import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { getAllUnitsImgs } from "../../../store/actions/bookingActions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

export class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      items: [
        {url: '/images/villa.jpg' , title: 'Little-cabin-Big Views'},
        {url: '/images/bg-1.png' , title: 'New Slide'},
        {url: '/images/bg-1.png' , title: 'New Slide'},
        {url: '/images/bg-1.png' , title: 'New Slide'},
        {url: '/images/bg-1.png' , title: 'New Slide'},
        {url: '/images/bg-1.png' , title: 'New Slide'},
        {url: '/images/bg-1.png' , title: 'New Slide'},
      ]
    }
  }
  componentDidMount() {
    this.props.getAllUnitsImgs(localStorage.getItem('unitName'));
  }
  slideTo = (i) => this.setState({ currentIndex: i });
  onSlideChanged = (e) => this.setState({ currentIndex: e.item });
  slideNext = () => {
    const { currentIndex , items } = this.state;
    if(currentIndex < items.length - 1){
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    }
    else {
      this.setState({ currentIndex: 0 })
    }
  }
  slidePrev = () => {
    const { currentIndex , items } = this.state;
    if(currentIndex > 0){
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    }
    else {
      this.setState({ currentIndex: items.length - 1 })
    }
  }
  renderThumbs = () => {
    const { currentIndex , items } = this.state;
    return <ul className="gallery-thumbs">
      {
        items.map((item, i) =>
          <li key={i} className={i === currentIndex ? 'active' : ''}>
            <a href="#" onClick={() => this.slideTo(i)}>
              <img src={item.url} />
            </a>
          </li>
        )
      }
    </ul>;

  }
  render() {
    const { currentIndex , items } = this.state;
    return (
      <div className="gallery-wrapper">
        <div className="slider-controls">
          <div className="close-control">
            <button className="close-btn" onClick={() => this.props.history.goBack()}><i className="fa fa-remove"></i></button>
          </div>
          <div className="navigation-control">
            <button className="prev" onClick={() => this.slidePrev()}><i className="fa fa-chevron-left"></i></button>
            <button className="next" onClick={() => this.slideNext()}><i className="fa fa-chevron-right"></i></button>
          </div>
        </div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        >
          {
            items.map((item , i) => 
              <img src={item.url} />
            )
          }
        </AliceCarousel>
        {this.renderThumbs()}
        <div className="current-slide-details">
          <div className="index">{currentIndex + 1 } / { items.length }</div>  
          <div className="slide-title">{items[currentIndex].title}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allImgs: state.booking.allImgs
  };
};

export default withRouter(connect(mapStateToProps , { getAllUnitsImgs })(Gallery))