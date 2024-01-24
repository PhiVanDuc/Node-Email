'use strict';

const { QueryInterface, NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('emails', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      to: {
        type: Sequelize.STRING(200),
      },
      title: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      content: {
        type: Sequelize.TEXT,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: NOW(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: NOW(),
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('emails');
  }
};
