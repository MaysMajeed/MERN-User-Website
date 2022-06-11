const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const cors = require("cors");

dotenv.config();
// const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
