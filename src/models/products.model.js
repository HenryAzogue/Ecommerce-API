const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Product = db.define('product', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  name: {
    type:          DataTypes.STRING(150),
    allowNull:     false
  },
  image: {
    type:          DataTypes.STRING,
    allowNull:     false
  },
  price: {
    type:          DataTypes.DECIMAL,
    allowNull:     false
  },
  availableQty: {
    type:          DataTypes.INTEGER,
    allowNull:     false
  },
  status: {
    type:          DataTypes.BOOLEAN,
    allowNull:     true
  },
  idUser: {
    type:          DataTypes.INTEGER,
    allowNull:    false,
    field:        'id_user'
  }
});

module.exports = Product;