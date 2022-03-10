const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedMeasurements = require("./measurement-seeds");
const seedIngredients = require("./ingredient-seeds");
const seesProgramms = require("./programme-seeds");
const seedProgrammeDetails = require("./programme-details-seeds");
const seedRegistration = require("./registration-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedMeasurements();
  console.log("--------------");
  await seedIngredients();
  console.log("--------------");
  await seesProgramms();
  console.log("--------------");
  await seedProgrammeDetails();
  console.log("--------------");
  await seedRegistration();
};

seedAll();
