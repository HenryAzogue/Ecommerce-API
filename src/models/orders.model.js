const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Order = db.define('order', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_user'
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Order;