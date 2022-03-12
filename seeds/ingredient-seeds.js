const sequelize = require("../config/connection");
const { Ingredient } = require("../models");

const ingredientdata = [
  {
    name: "egg",
  },
  {
    name: "baking soda",
    measurment_id: 2,
  },
  {
    name: "baking powder",
    measurment_id: 2,
  },
  {
    name: "sugar",
    measurment_id: 1,
  },
  {
    name: "milk",
    measurment_id: 5,
  },
  {
    name: "oil",
    measurment_id: 3,
  },
  {
    name: "butter",
    measurment_id: 4,
  },
  {
    name: "all purpose flour",
    measurment_id: 1,
  },
  {
    name: "honey",
    measurment_id: 3,
  },
];

const seedUsers = () =>
  Ingredient.bulkCreate(ingredientdata, { individualHooks: true });

module.exports = seedUsers;
