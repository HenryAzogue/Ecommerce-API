const Users          = require('./users.model');
const Products       = require('./products.model');
const Car            = require('./cars.model');
const Order          = require('./orders.model');
const ProductInCar   = require('./productInCar.model');
const ProductInOrder = require('./productInOrder.model');

const initModels = ()=> {
  Users.hasOne(Car, { as:'buy', foreignKey: 'id_user' });

  Users.belongsTo(Products, { as: 'user', foreignKey: 'id_user' });
  Products.hasMany(Users, { as: 'product', foreignKey: 'id_user' });

  Users.belongsTo(Order, { as: 'user', foreignKey: 'id_user' });
  Order.hasMany(Users, { as: 'order', foreignKey: 'id_user' });

  Products.belongsTo(ProductInCar, { as: 'product', foreignKey: 'id_product' });
  ProductInCar.hasMany(Products, { as: 'product_in_car', foreignKey: 'id_product' });
  Car.belongsTo(ProductInCar, { as:'car', foreignKey: 'id_car' });
  ProductInCar.hasMany(Car, { as:'product_in_car', foreignKey: 'id_car' });

}

module.exports = initModels;