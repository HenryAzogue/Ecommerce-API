const { Users, Products, Cars, Orders, ProductInCar, ProductInOrder } = require('./index');

const initModels = ()=> {
  Users.hasOne(Cars, { as:'cars', foreignKey: 'id_user' });

  Users.belongsTo(Products, { as: 'products', foreignKey: 'id_user' });
  Products.hasMany(Users, { as: 'users', foreignKey: 'id_user' });

  Users.belongsTo(Orders, { as: 'orders', foreignKey: 'id_user' });
  Orders.hasMany(Users, { as: 'users', foreignKey: 'id_user' });

  Products.belongsTo(ProductInCar, { as: 'productInCar', foreignKey: 'id_product' });
  ProductInCar.hasMany(Products, { as: 'products', foreignKey: 'id_product' });
  Cars.belongsTo(ProductInCar, { as:'productInCar', foreignKey: 'id_car' });
  ProductInCar.hasMany(Cars, { as: 'cars', foreignKey: 'id_car' });

  Products.belongsTo(ProductInOrder, { as: 'productInOrder', foreignKey: 'idProduct' });
  ProductInOrder.hasMany(Products, { as: 'products', foreignKey: 'idProduct'} );
  Orders.belongsTo(ProductInOrder, { as: 'productInOrder', foreignKey: 'idOrder'} );
  ProductInOrder.hasMany(Orders, { as:'orders', foreignKey: 'idOrder'} );
}

module.exports = initModels;