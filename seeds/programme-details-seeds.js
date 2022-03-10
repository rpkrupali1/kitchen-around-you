const sequelize = require("../config/connection");
const { ProgrammeDetails } = require("../models");

const programmeDetailsdata = [
  {
    programme_id: 1,
    ingredient_id: 1,
    quantity: 3,
  },
  {
    programme_id: 1,
    ingredient_id: 2,
    quantity: 1,
  },
  {
    programme_id: 1,
    ingredient_id: 8,
    quantity: 4,
  },
  {
    programme_id: 2,
    ingredient_id: 1,
    quantity: 1,
  },
  {
    programme_id: 2,
    ingredient_id: 6,
    quantity: 4,
  },
  {
    programme_id: 2,
    ingredient_id: 5,
    quantity: 3,
  },
];

const seedProgrammeDetails = () =>
  ProgrammeDetails.bulkCreate(programmeDetailsdata, { individualHooks: true });

module.exports = seedProgrammeDetails;
