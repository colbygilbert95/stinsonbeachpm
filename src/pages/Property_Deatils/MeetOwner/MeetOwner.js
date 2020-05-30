import React, { Component } from "react";
import { getOwnerInfoByListing } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import moment from "moment";

class MeetOwner extends Component {
  componentDidMount() {
    const { unitName } = this.props;
    this.props.getOwnerInfoByListing(unitName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.unitName != this.props.unitName) {
      const { unitName } = this.props;
      this.props.getOwnerInfoByListing(unitName);
    }
  }
  render() {
    const ownerInfo =
      this.props.ownerInfo[0] === undefined
        ? { Bio: "" }
        : this.props.ownerInfo[0];

    const { FirstName, LastName, Bio, PictureURL, AddedOn } = ownerInfo;
    return (
      <section className="meet-the-owner">
        <div className="container-n">
          <hr />
          <div className="row ">
            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Meet the Owner</h3>
              </div>
            </div>
          </div>
          <div className="row  mb-40">
            <div className="col-sm-9 mt-15">
              <div className="meet-box">
                <div className="row">
                  <div className="col-sm-3">
                    <img className="meet-img-box" src={PictureURL} />
                  </div>
                  <div className="col-sm-9">
                    <div className="meet-coment">
                      <p className="mtb-15">
                        <strong>Hi, {FirstName + " " + LastName},</strong>
                      </p>
                      <span>
                        {Bio.split(/\n/i).map((text, index) => {
                          return (
                            <React.Fragment key={index}>
                              {text}
                              <br />
                            </React.Fragment>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mt-15">
              <div className="meet-box meet-box-contact">
                <p>
                  <strong>Joined:</strong> {moment(AddedOn).format("MMMM YYYY")}
                </p>
                <p>
                  <strong>Response rate:</strong> 100%
                </p>
                <p>
                  <strong>Response time:</strong> within an hour
                </p>
                <p className="contact-with-owner-btn">
                  <a href="#">Contact</a>
                </p>
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
    ownerInfo: state.booking.ownerInfo,
  };
};

export default connect(mapStateToProps, { getOwnerInfoByListing })(MeetOwner);
