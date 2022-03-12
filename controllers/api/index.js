const router = require("express").Router();
const ingredientRoutes = require("./ingredient-routes");
const userRoutes = require("./user-routes");
const measurementRoutes = require("./measurment-routes");

//router.use('/ingredients', ingredientRoutes);
router.use("/users", userRoutes);
router.use("/measurments", measurementRoutes);

module.exports = router;
