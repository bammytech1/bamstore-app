const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleware/errorMiddleware");
const products = require("./products");
// const protect = require("./middleware/protect");

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5000"],
    credentials: true,
  })
);

//routes
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);

app.get("/", (req, res) => {
  res.send("Home page...");
});

app.get("/products", (req, res) => {
  res.send(products);

  // console.log(products);
});

app.post("/createProduct", (req, res) => {
  res.send("this is product page");

  // console.log(products);
});

// error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
