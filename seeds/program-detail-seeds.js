const sequelize = require("../config/connection");
const { ProgramDetail } = require("../models");

const programmeDetailsdata = [
  {
    program_id: 1,
    ingredient_id: 1,
    quantity: 3,
  },
  {
    program_id: 1,
    ingredient_id: 2,
    quantity: 1,
  },
  {
    program_id: 1,
    ingredient_id: 8,
    quantity: 4,
  },
  {
    program_id: 2,
    ingredient_id: 1,
    quantity: 1,
  },
  {
    program_id: 2,
    ingredient_id: 6,
    quantity: 4,
  },
  {
    program_id: 2,
    ingredient_id: 5,
    quantity: 3,
  },
];

const seedProgrammeDetails = () =>
  ProgramDetail.bulkCreate(programmeDetailsdata, { individualHooks: true });

module.exports = seedProgrammeDetails;
