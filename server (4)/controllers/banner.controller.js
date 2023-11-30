const Banner = require("../models/Banner");

// GET all banners
exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST a new banner
exports.createBanner = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    if (!req.file) {
      return res.status(403).json({
        success: false,
        message: "please provide a banner",
      });
    }

    const bannerImage = `${process.env.APP_URL}/images/${req.file.filename}`;
    const bannerName = req.file.filename;
    const banner = await Banner.create({
      image: bannerImage,
      name: bannerName,
      ...data,
    });
    console.log(banner);
    res.status(201).json({
      success: true,
      message: "successfully banner added",
      data: banner,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Invalid data" });
  }
};

// PUT (update) a banner

// DELETE a banner
exports.deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
    if (!deletedBanner) {
      return res.status(403).json({
        success: false,
        message: "banner does not axists",
      });
    }

    res.status(200).json({
      success: true,
      message: "Banner deleted",
    });
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};
