'use strict';
const {v4 : uuidv4} = require('uuid');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Apps.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: uuidv4().slice(0, 20),
    },
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'apps',
    modelName: 'Apps',
  });
  return Apps;
};