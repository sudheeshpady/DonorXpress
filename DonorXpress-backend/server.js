const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const donorRoutes = require("./routes/donorRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/donors", donorRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log("Server running on 5000")))
    .catch((err) => console.log(err));
