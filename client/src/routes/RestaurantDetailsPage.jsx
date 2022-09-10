import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import API from "../api";
import Rating from "../components/Rating";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/${id}`);
        setSelectedRestaurant(response.data.restaurant);
      } catch (err) {
        throw err.response;
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      <h1>{selectedRestaurant && selectedRestaurant.name}</h1>
      <div>{selectedRestaurant && <Rating rating={3.5} />}</div>
    </div>
  );
};

export default RestaurantDetailsPage;
