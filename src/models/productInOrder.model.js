const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductInOrder = db.define('productInOrder', {
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
  idOrder: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_order'
  },
  quantity: {
    type:          DataTypes.INTEGER,
    allowNull:     false
  },
  price: {
    type:          DataTypes.DECIMAL,
    allowNull:     false 
  },
  status: {
    type:          DataTypes.BOOLEAN,
    defaultValue:  false
  }
});

module.exports = ProductInOrder;