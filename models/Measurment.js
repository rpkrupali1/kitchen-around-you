const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Measurment extends Model {}
Measurment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    modelName: "measurment",
  }
);

module.exports = Measurment;
