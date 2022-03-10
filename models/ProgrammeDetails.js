const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProgrammeDetails extends Model {}
ProgrammeDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    programme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "programme",
        key: "id",
      },
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ingredient",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    modelName: "programmeDetail",
  }
);

module.exports = ProgrammeDetails;
