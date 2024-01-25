'use strict';

const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    moment.tz.setDefault('Asia/Ho_Chi_Minh');

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
        defaultValue: moment.tz.setDefault('Asia/Ho_Chi_Minh')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: moment.tz.setDefault('Asia/Ho_Chi_Minh')
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('emails');
  }
};
