const sequelize = require("../config/connection");
const { Registration } = require("../models");

const registrationDetails = [
  {
    program_id: 1,
    user_id: 1,
  },
  {
    program_id: 2,
    user_id: 1,
  },
  {
    program_id: 3,
    user_id: 2,
  },
  {
    program_id: 4,
    user_id: 3,
  },
  {
    program_id: 1,
    user_id: 3,
  },
  {
    program_id: 2,
    user_id: 4,
  },
];

const seedRegistration = () =>
  Registration.bulkCreate(registrationDetails, { individualHooks: true });

module.exports = seedRegistration;
