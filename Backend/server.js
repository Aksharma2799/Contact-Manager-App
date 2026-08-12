const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection");

//Database connection
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

//Middleware
app.use(express.json());

//Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

//Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
