const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ingredient extends Model {}
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measurment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "measurment",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    modelName: "ingredient",
  }
);

module.exports = Ingredient;
