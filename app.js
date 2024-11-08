// app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const paymentRoutes = require("./routes/payment");
const axios = require("axios");

//AS
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB(); // Conecta a MongoDB

app.use("/api/v1", paymentRoutes); // Rutas de pago

const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

app.get("/api/pokemon", async (req, res) => {
  try {
    // Hacer una petición GET a la API externa
    const response = await axios.get(apiUrl);

    // Manejar la respuesta y enviar los datos al cliente
    res.status(200).json(response.data);
  } catch (error) {
    // Manejar errores
    console.error("Error al hacer la petición:", error);
    res.status(500).json({ error: "Error al obtener datos de la API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
