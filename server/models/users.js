'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    user: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true
  })
  return Users;
};