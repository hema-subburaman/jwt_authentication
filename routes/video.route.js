const router = require("express").Router();
const Video = require("../models/video.model.js");

router.get("/:id/videos", async (req, res) => {
  try {
    const video = await Video.findOne({
      id: Number(req.params.id),
    }).lean();

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Videos not found",
      });
    }

    res.status(200).json({
      success: true,
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// const mongoose = require("mongoose");

// router.get("/:id/videos", async (req, res) => {
//   const docs = await mongoose.connection.db
//     .collection("video-datas")
//     .find({})
//     .toArray();

//   console.log(JSON.stringify(docs, null, 2));

//   res.json(docs);
// });

module.exports = router;
