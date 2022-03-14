const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProgramDetail extends Model {}
ProgramDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "program",
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
    modelName: "programdetail",
  }
);

module.exports = ProgramDetail;
