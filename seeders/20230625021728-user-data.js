'use strict';

const { GeneratePassword, GenerateSalt } = require('../utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 12,
      name: process.env.NAME,
      email: process.env.EMAIL,
      password: await GeneratePassword(process.env.PASSWORD, await GenerateSalt()),
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
