const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Registration extends Model {}
Registration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "program",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    modelName: "registration",
  }
);

module.exports = Registration;
