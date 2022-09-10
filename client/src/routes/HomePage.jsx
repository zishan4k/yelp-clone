import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <AddRestaurant />
        <RestaurantList />
      </div>
    </div>
  );
};

export default HomePage;
