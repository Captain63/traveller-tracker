const router = require("express").Router();
const travellerRoutes = require("./travellerRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes");

router.use("/traveller", travellerRoutes);
router.use("/location", locationRoutes);
router.use("/trip", tripRoutes);

module.exports = router;
