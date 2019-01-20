'use strict';
module.exports = (sequelize, DataTypes) => {
  const Properties = sequelize.define('properties', {
    user: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true
  })
  return Properties;
};