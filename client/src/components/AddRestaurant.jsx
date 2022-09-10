import React, { useContext, useState } from "react";
import API from "../api";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      addRestaurants(response.data.restaurant);
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className="form-container">
      <form action="" className="add-restaurant-form">
        <div className="form-row">
          <div className="form-column">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-input"
              placeholder="Restaurant Name"
            />
          </div>
          <div className="form-column">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-input"
              placeholder="Restaurant Location"
            />
          </div>
          <div className="form-column">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              name="price-ranges"
              id="price-ranges"
              className="form-input price-ranges"
            >
              <option disabled>Price Range</option>
              <option value="1">£</option>
              <option value="2">££</option>
              <option value="3">£££</option>
              <option value="4">££££</option>
              <option value="5">£££££</option>
            </select>
          </div>
        </div>
      </form>
      <div className="add-btn-wrapper">
        <button className="add-btn" type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddRestaurant;
