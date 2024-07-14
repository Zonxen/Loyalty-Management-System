"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },

  down: (queryInterface, Sequelize) => {
    // Tidak perlu mengisi data ulang jika data dihapus
  },
};
