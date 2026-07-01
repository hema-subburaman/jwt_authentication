const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    results: [
      {
        iso_639_1: String,
        iso_3166_1: String,
        name: String,
        key: String,
        site: String,
        size: Number,
        type: String,
        official: Boolean,
        id: String,
        published_at: String,
      },
    ],
  },
  {
    timestamps: true,
    strict: false,
  },
);

const Videos = mongoose.model("video-data", videoSchema, "video-datas");

module.exports = Videos;
