"use strict";
const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }

  Transaction.init(
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
      transactionID: {
        type: DataTypes.STRING,
      },
      transactionDate: {
        type: DataTypes.DATE,
      },
      type: {
        type: DataTypes.ENUM("Earned", "Redeemed"),
      },
      poin: {
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
      modelName: "Transaction",
    }
  );

  return Transaction;
};
