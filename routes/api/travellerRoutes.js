const router = require("express").Router();
const { Traveller, Trip, Location } = require("../../models");

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

// Get single traveller
router.get("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Traveller }, { model: Trip }, { model: Location }],
    });

    if (!travellerData) {
      res.status(404).json({ message: "No traveller found with that id!" });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a traveller
router.post("/", async (req, res) => {
  try {
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: "No traveller found with that id!" });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
