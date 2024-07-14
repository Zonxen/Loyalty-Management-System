"use strict";
const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PointHistory extends Model {
    static associate(models) {
      PointHistory.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }

  PointHistory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      transactionId: {
        type: DataTypes.STRING,
      },
      transactionDate: {
        type: DataTypes.DATE,
      },
      type: {
        type: DataTypes.ENUM("Earned", "Redeemed"),
      },
      point: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      sequelize,
      modelName: "PointHistory",
    }
  );

  return PointHistory;
};
