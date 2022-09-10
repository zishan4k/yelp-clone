import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import RestaurantDetailsPage from "./routes/RestaurantDetailsPage";
import UpdatePage from "./routes/UpdatePage";
import "./App.css";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailsPage />}
          />
          <Route
            exact
            path="/restaurants/:id/update"
            element={<UpdatePage />}
          />
        </Routes>
      </BrowserRouter>
    </RestaurantsContextProvider>
  );
};

export default App;
