const router = require("express").Router();
const { Traveller } = require("../../models");

// Get all travellers
router.get("/", async (req, res) => {
  try {
    const travellersData = await Traveller.findAll({
      include: [{ model: Traveller }],
    });
    res.status(200).json(travellersData);
  } catch (err) {
    res.status(500).json(err);
  }
});
