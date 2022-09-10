require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware function
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants ORDER BY id");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      restaurants: results.rows,
    });
  } catch (err) {
    throw err.response.data;
  }
});

// Get restaurant by id
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM restaurants where id = $1", [
      id,
    ]);
    res.status(200).json({
      status: "success",
      restaurant: result.rows[0],
    });
  } catch (err) {
    throw err.response;
  }
});

// Create a new restaurant
app.post("/api/v1/restaurants/", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const result = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );
    console.log(result);
    res.status(201).json({
      status: "success",
      restaurant: result.rows[0],
    });
  } catch (err) {
    throw err.response.data;
  }
});

// Update restaurant by id
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, price_range } = req.body;
    const result = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [name, location, price_range, id]
    );
    res.status(200).json({
      status: "success",
      restaurant: result.rows[0],
    });
  } catch (err) {
    throw err.response.data;
  }
});

// Delete restaurant by id
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("DELETE FROM restaurants WHERE id = $1", [
      id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    throw err.response.data;
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
