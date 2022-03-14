const User = require("./User");
const Measurment = require("./Measurment");
const Ingredient = require("./Ingredient");
const Program = require("./Program");
const ProgramDetail = require("./ProgramDetail");
const Registration = require("./Registration");

Ingredient.belongsTo(Measurment, {
  foreignKey: "measurment_id",
});

Measurment.hasOne(Ingredient, {
  foreignKey: "measurment_id",
});

Program.hasMany(ProgramDetail, {
  foreignKey: "program_id",
});

ProgramDetail.belongsTo(Program, {
  foreignKey: "program_id",
});

ProgramDetail.belongsTo(Ingredient, {
  foreignKey: "ingredient_id",
});

Ingredient.hasMany(ProgramDetail, {
  foreignKey: "ingredient_id",
});

User.hasMany(Registration, {
  foreignKey: "user_id",
});

Registration.belongsTo(User, {
  foreignKey: "user_id",
});

Program.hasMany(Registration, {
  foreignKey: "program_id",
});

Registration.belongsTo(Program, {
  foreignKey: "program_id",
});

module.exports = {
  User,
  Measurment,
  Ingredient,
  Program,
  ProgramDetail,
  Registration,
};
