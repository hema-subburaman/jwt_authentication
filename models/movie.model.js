const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    original_title: String,
    overview: String,
    poster_path: String,
    backdrop_path: String,
    release_date: String,
    vote_average: Number,
    vote_count: Number,
    popularity: Number,
    original_language: String,
    genre_ids: [Number],
    adult: Boolean,
    video: Boolean,
    media_type: String,
    softcore: Boolean,
  },
  {
    timestamps: true,
  },
);

const Movies = mongoose.model("movie-data", movieSchema);

module.exports = Movies;
