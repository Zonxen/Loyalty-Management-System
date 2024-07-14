"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "name", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "phoneNo", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "birthDate", {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("Users", "address", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "joinDate", {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("Users", "referral", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "earnedPoint", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Users", "redeemedPoint", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Users", "remainedPoint", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Users", "status", {
      type: Sequelize.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "name");
    await queryInterface.removeColumn("Users", "phoneNo");
    await queryInterface.removeColumn("Users", "birthDate");
    await queryInterface.removeColumn("Users", "address");
    await queryInterface.removeColumn("Users", "joinDate");
    await queryInterface.removeColumn("Users", "referral");
    await queryInterface.removeColumn("Users", "earnedPoint");
    await queryInterface.removeColumn("Users", "redeemedPoint");
    await queryInterface.removeColumn("Users", "remainedPoint");
    await queryInterface.removeColumn("Users", "status");
  },
};
