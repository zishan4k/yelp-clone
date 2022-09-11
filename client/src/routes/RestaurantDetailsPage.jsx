import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import API from "../api";
import Rating from "../components/Rating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
        // console.log(response.data.data);
      } catch (err) {
        throw err.response;
      }
    };

    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1>{selectedRestaurant.restaurant.name}</h1>
          <div>
            <Rating rating={selectedRestaurant.restaurant.avg_rating} />
            <span>
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "No reviews"}
            </span>
          </div>
          <div>
            <Reviews reviews={selectedRestaurant.reviews} />
            <AddReview />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
