const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductInCar = db.define('productInCar', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  idProduct: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_product'
  },
  idCar: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_car'
  },
  quantity: {
    type:          DataTypes.INTEGER,
    allowNull:     true
  },
  price: {
    type:          DataTypes.INTEGER,
    allowNull:     false
  },
  status:{
    type:          DataTypes.BOOLEAN,
    defaultValue:  false
  }
});

module.exports = ProductInCar;