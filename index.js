const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.route.js");
const movieRoutes = require("./routes/movie.route.js");
const movieDetailsRoutes = require("./routes/movieDetails.route.js");
const videoRoutes = require("./routes/video.route.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/movies", movieDetailsRoutes);
app.use("/movies", videoRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(
    "mongodb+srv://iamhema2k6_db_user:TbcFJon1ER8PPuvp@authentication.wmcpstk.mongodb.net/?appName=authentication",
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed");
    console.log(error);
  });
