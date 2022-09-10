import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/");
        // console.log(response);
        setRestaurants(response.data.restaurants);
      } catch (err) {
        throw err;
      }
    };
    fetchData();
  }, [setRestaurants]);

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await API.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (err) {
      throw err;
    }
  };

  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div>
      <table className="restaurants-table">
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"£".repeat(restaurant.price_range)}</td>
                  <td>Rating</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      onClick={(e) => handleDelete(e, restaurant.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
