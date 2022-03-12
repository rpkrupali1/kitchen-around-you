const router = require("express").Router();
const ingredientRoutes = require("./ingredient-routes");
const userRoutes = require("./user-routes");
const measurementRoutes = require("./measurment-routes");
const programRoutes = require("./program-routes");
const programDetailRoutes = require("./program_details-routes");
const registrationRoutes = require("./registration-routes");

router.use("/users", userRoutes);
router.use("/measurments", measurementRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/programs", programRoutes);
router.use("/programdetails", programDetailRoutes);
router.use("/registrations", registrationRoutes);

module.exports = router;
