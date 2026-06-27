const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route.js");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

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
