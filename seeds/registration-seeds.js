const sequelize = require("../config/connection");
const { Registration } = require("../models");

const registrationDetails = [
  {
    programme_id: 1,
    user_id: 1,
  },
  {
    programme_id: 2,
    user_id: 1,
  },
  {
    programme_id: 3,
    user_id: 2,
  },
  {
    programme_id: 4,
    user_id: 3,
  },
  {
    programme_id: 1,
    user_id: 3,
  },
  {
    programme_id: 2,
    user_id: 4,
  },
];

const seedRegistration = () =>
  Registration.bulkCreate(registrationDetails, { individualHooks: true });

module.exports = seedRegistration;
