const router = require("express").Router();
const Movies = require("../models/movie.model.js");

router.get("/search", async (req, res) => {
  try {
    const query = req.query.query;

    const movies = await Movies.find({
      title: {
        $regex: query,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      total: movies.length,
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
