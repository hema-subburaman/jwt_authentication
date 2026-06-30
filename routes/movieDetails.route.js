const router = require("express").Router();
const Movie = require("../models/movieDetails.model.js");

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({
      id: Number(req.params.id),
    });
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      data: movie,
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
