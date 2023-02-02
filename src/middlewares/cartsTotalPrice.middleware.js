const { Car, ProductInCar } = require('../models');

const cartTotalPrice = async (idUserCar)=> {
  const cart = await Car.findOne({where: {id: idUserCar}});
  const productInCart = await ProductInCar.findAll({where: {idCar: cart.id}});

  cart.totalPrice = 0;
  productInCart.map((product)=> cart.totalPrice += product.price);
  cart.save();
};

module.exports = cartTotalPrice;