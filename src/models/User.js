"use strict";
const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here if any
      User.hasMany(models.Transaction, { foreignKey: "userId", as: "transactions" });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 100],
          is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
        },
      },
      name: {
        type: DataTypes.STRING,
      },
      phoneNo: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      address: {
        type: DataTypes.STRING,
      },
      joinDate: {
        type: DataTypes.DATE,
      },
      referral: {
        type: DataTypes.STRING,
      },
      earnedPoint: {
        type: DataTypes.INTEGER,
      },
      redeemedPoint: {
        type: DataTypes.INTEGER,
      },
      remainedPoint: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("Active", "Inactive"),
        defaultValue: "Active",
      },
      rememberToken: {
        type: DataTypes.STRING,
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
      modelName: "User",
    }
  );

  return User;
};
