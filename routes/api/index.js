const router = require('express').Router();
const classRoutes = require('./class-routes');
const classDetailRoutes = require('./class_details-routes');
const ingredientRoutes = require('./ingredient-routes');
const userRoutes = require('./user-routes');


router.use('/classes', classRoutes);
router.use('/class_details', classDetailRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);

module.exports = router;
