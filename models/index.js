const User = require("./User");
const Measurment = require("./Measurment");
const Ingredient = require("./Ingredient");
const Programme = require("./Programme");
const ProgrammeDetails = require("./ProgrammeDetails");

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

module.exports = {
  User,
  Measurment,
  Ingredient,
  Programme,
  ProgrammeDetails,
};
