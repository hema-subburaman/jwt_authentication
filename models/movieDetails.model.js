const mongoose = require("mongoose");
const movieDetailsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    title: String,
    original_title: String,
    overview: String,

    poster_path: String,
    backdrop_path: String,

    release_date: String,

    vote_average: Number,
    vote_count: Number,

    popularity: Number,

    original_language: String,

    adult: Boolean,
    video: Boolean,
    budget: Number,

    genres: [
      {
        id: Number,
        name: String,
      },
    ],

    homepage: String,

    imdb_id: String,

    origin_country: [String],

    production_companies: [
      {
        id: Number,
        logo_path: String,
        name: String,
        origin_country: String,
      },
    ],

    production_countries: [
      {
        iso_3166_1: String,
        name: String,
      },
    ],

    revenue: Number,

    runtime: Number,

    spoken_languages: [
      {
        english_name: String,
        iso_639_1: String,
        name: String,
      },
    ],

    status: String,

    tagline: String,
  },
  {
    timestamps: true,
  },
);

const MovieDetails = mongoose.model("MovieDetails-Data", movieDetailsSchema);

module.exports = MovieDetails;
