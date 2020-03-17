import React from 'react';
import moment from "moment"

const Review = (reviewData) => {
  const rData = reviewData.reviewData
  return (<div className="col-sm-6">
    <div className="reviews-box">
      <div >
        <img className="reviews-img-box" src={rData.GuestPic} />
      </div>
      <div className="reviews-coment-box">
        <p>
          {rData.PublicFeedback}
        </p>
        <p>
          <strong>{rData.FirstName}</strong>
        </p>
        <p className="reviews-day">{moment(rData.AddedOn).format("MMMM YYYY")}</p>
      </div>
    </div>
  </div>);
}

export default Review;