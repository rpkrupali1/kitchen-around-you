const router = require("express").Router();
const ingredientRoutes = require("./ingredient-routes");
const userRoutes = require("./user-routes");
const measurementRoutes = require("./measurment-routes");
const programRoutes = require("./program-routes");

router.use("/users", userRoutes);
router.use("/measurments", measurementRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/programs", programRoutes);

module.exports = router;
