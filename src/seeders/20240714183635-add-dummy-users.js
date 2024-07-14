'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('P@ssw0rdsus4h', 10);

    return queryInterface.bulkInsert('Users', [
      {
        email: 'Reynard@gmail.com',
        password: hashedPassword,
        name: 'Reynard',
        phoneNo: '123456789',
        birthDate: new Date('1990-01-01'),
        address: '123 Street Name',
        joinDate: new Date('2023-01-01'),
        referral: 'ref123',
        earnedPoint: 200,
        redeemedPoint: 100,
        remainedPoint: 100,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Bambang@gmail.com',
        password: hashedPassword,
        name: 'Bambang',
        phoneNo: '987654321',
        birthDate: new Date('1992-02-02'),
        address: '456 Another St',
        joinDate: new Date('2023-02-01'),
        referral: 'ref456',
        earnedPoint: 300,
        redeemedPoint: 150,
        remainedPoint: 150,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
