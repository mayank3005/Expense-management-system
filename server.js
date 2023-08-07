const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
// config dotenv
dotenv.config();

//database connect
connectDb();

// rest object
app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

// port
const PORT = 8080 || process.env.PORT;

// listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.black);
});
