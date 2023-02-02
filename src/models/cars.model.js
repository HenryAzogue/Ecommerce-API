const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Car = db.define('car',{
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  idUser: {
    type:          DataTypes. INTEGER,
    allowNull:     false,
    field:         'id_user'
  },
  totalPrice: {
    type:          DataTypes.DECIMAL,
    allowNull:     true
  }
});

module.exports = Car;