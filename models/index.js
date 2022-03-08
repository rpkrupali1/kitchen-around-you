const User = require("./User");
const Measurment = require("./Measurment");
const Ingredient = require("./Ingredient");

Ingredient.belongsTo(Measurment, {
  foreignKey: "measurment_id",
});

Measurment.hasOne(Ingredient, {
  foreignKey: "measurment_id",
});

module.exports = {
  User,
  Measurment,
  Ingredient,
};
