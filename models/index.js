const User = require("./User");
const Measurment = require("./Measurment");
const Ingredient = require("./Ingredient");
const Programme = require("./Programme");
const ProgrammeDetails = require("./ProgrammeDetails");
const Registration = require("./Registration");

Ingredient.belongsTo(Measurment, {
  foreignKey: "measurment_id",
});

Measurment.hasOne(Ingredient, {
  foreignKey: "measurment_id",
});

Programme.hasMany(ProgrammeDetails, {
  foreignKey: "programme_id",
});

ProgrammeDetails.belongsTo(Programme, {
  foreignKey: "programme_id",
});

ProgrammeDetails.belongsTo(Ingredient, {
  foreignKey: "ingredient_id",
});

Ingredient.hasMany(ProgrammeDetails, {
  foreignKey: "ingredient_id",
});

User.hasMany(Registration, {
  foreignKey: "user_id",
});

Registration.belongsTo(User, {
  foreignKey: "user_id",
});

Programme.hasMany(Registration, {
  foreignKey: "programme_id",
});

Registration.belongsTo(Programme, {
  foreignKey: "programme_id",
});

module.exports = {
  User,
  Measurment,
  Ingredient,
  Programme,
  ProgrammeDetails,
  Registration,
};
