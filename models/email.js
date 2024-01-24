'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Email.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    to: DataTypes.STRING(200),
    title: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Email',
    tableName: 'emails',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Email;
};