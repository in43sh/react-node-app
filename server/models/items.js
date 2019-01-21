'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('items', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true
  })
  return Items;
};