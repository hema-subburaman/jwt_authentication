const router = require("express").Router();
const Movies = require("../models/movie.model.js");

router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 20;

    const skip = (page - 1) * limit;

    const movies = await Movies.find().skip(skip).limit(limit);

    const totalMovies = await Movies.countDocuments();

    res.status(200).json({
      success: true,
      total: movies.length,
      data: movies,
      totalMovies,
      totalPages: Math.ceil(totalMovies / limit),
      currentPage: page,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
