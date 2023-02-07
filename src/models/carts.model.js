const db            = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users         = require('./users.model')

/**
 * @openapi
 * components:
 *   schemas:
 *     addProduct:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *           example: 1
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 1
 *         price:
 *           type: double
 *           example: 50
 */

const Cart = db.define('cart',{
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  idUser: {
    type:          DataTypes. INTEGER,
    allowNull:     false,
    field:         'id_user',
    references: {
      model:    Users,
      key:      'id'
    }
  },
  totalPrice: {
    type:          DataTypes.FLOAT,
    allowNull:     true
  }
});

module.exports = Cart;