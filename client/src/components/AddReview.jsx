import React, { useState } from "react";
import API from "../api";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/${id}/review`, {
        name,
        rating,
        review,
      });
    } catch (err) {
      throw err.response;
    }
    navigate("/");
    await delay(10);
    navigate(`${location.pathname}`);
  };

  return (
    <div>
      <form action="">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="add-review-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              name="rating"
              id="rating"
              className="add-review-rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="" disabled>
                Rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            id="review"
            cols="60"
            rows="10"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="add-btn review-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
