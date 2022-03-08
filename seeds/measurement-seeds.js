const sequelize = require("../config/connection");
const { Measurment } = require("../models");

const measurementdata = [
  {
    unit: "cup"
  },
  {
    unit: "teaspoon"
  },
  {
    unit: "tablespoon"
  },
  {
    unit: "gram"
  },
  {
    unit: "mL"
  },
  {
    unit: "kg"
  },
];

const seedUsers = () =>
  Measurment.bulkCreate(measurementdata, { individualHooks: true });

module.exports = seedUsers;
