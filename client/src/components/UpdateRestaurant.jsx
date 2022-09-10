import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  let navigate = useNavigate();

  //Load the selected restaurants data in update page without loading restaurants list from homepage
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`/${id}`);
      setName(response.data.restaurant.name);
      setLocation(response.data.restaurant.location);
      setPriceRange(response.data.restaurant.price_range);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate("/");
  };

  return (
    <div className="form-container">
      <form action="">
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="price_range">Price Range</label>
          <input
            id="price_range"
            type="number"
            min="1"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="add-btn submit-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
