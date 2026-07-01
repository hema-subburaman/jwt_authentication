const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("app-user", userSchema);

module.exports = Users;
