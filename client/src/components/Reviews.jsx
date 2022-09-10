import React from "react";
import Rating from "../components/Rating";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-container">
      {reviews.map((review) => {
        return (
          <div className="review-wrapper" key={review.id}>
            <div className="review-header">
              <span>{review.name}</span>
              <span className="review-rating">
                <Rating rating={review.rating} />
              </span>
            </div>
            <div className="review-body">
              <div className="review-text">{review.review}</div>
            </div>
          </div>
        );
      })}
      {/* <div className="review-wrapper">
        <div className="review-header">
          <span>name</span>
          <span className="review-rating">
            <Rating rating={3} />
          </span>
        </div>
        <div className="review-body">
          <div className="review-text">review text</div>
        </div>
      </div>
      <div className="review-wrapper">
        <div className="review-header">
          <span>name</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="review-body">
          <div className="review-text">review text</div>
        </div>
      </div>
      <div className="review-wrapper">
        <div className="review-header">
          <span>name</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="review-body">
          <div className="review-text">review text</div>
        </div>
      </div>
      <div className="review-wrapper">
        <div className="review-header">
          <span>name</span>
          <span>
            <Rating rating={3} />
          </span>
        </div>
        <div className="review-body">
          <div className="review-text">review text</div>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
