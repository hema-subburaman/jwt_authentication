const router = require("express").Router();
const Video = require("../models/video.model.js");

router.get("/:id/videos", async (req, res) => {
  try {
    const video = await Video.findOne({
      id: Number(req.params.id),
    });

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Videos not found",
      });
    }

    res.status(200).json({
      success: true,
      data: Video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
