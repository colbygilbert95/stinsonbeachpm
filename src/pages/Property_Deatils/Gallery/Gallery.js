import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { getAllUnitsImgs } from "../../../store/actions/bookingActions";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

export class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      items: []
    }
  }
  componentDidMount() {
    this.props.getAllUnitsImgs(localStorage.getItem('unitName')).then(() => {
      this.setState({
        items: this.props.allImgs
      })
    })
  }
  slideTo = (e , i) => {
    e.preventDefault()
    this.setState({ currentIndex: i })
  }
  onSlideChanged = (e) => this.setState({ currentIndex: e.item });
  slideNext = () => {
    let { currentIndex, items } = this.state;
    if (currentIndex < items.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    }
    else {
      this.setState({ currentIndex: 0 })
    }
  }
  slidePrev = () => {
    let { currentIndex, items } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    }
    else {
      this.setState({ currentIndex: items.length - 1 })
    }
  }
  renderThumbs = () => {
    let { currentIndex, items } = this.state;
    return <ul className="gallery-thumbs">
      {
        items.map((item, i) =>
          <li key={i} className={i === currentIndex ? 'active' : ''}>
            <a href="#" onClick={(e) => this.slideTo(e , i)}>
              <img src={item.URL} />
            </a>
          </li>
        )
      }
    </ul>;

  }
  renderItems = () => {
    let { items } = this.state;
    return items.map((item, i) =>
      <li key={i}>
        <img src={item.URL} />
      </li>
    );
  }
  render() {
    let { currentIndex, items } = this.state;
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
        {
          items.length > 0 &&
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
          >
            {this.renderItems()}
          </AliceCarousel>
        }
        {this.renderThumbs()}
        {
          items.length > 0 &&
          <div className="current-slide-details">
            <div className="index">{currentIndex + 1} / {items.length}</div>
            <div className="slide-title">{items[currentIndex].Name}</div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allImgs: state.booking.allImgs
  };
};

export default withRouter(connect(mapStateToProps, { getAllUnitsImgs })(Gallery));