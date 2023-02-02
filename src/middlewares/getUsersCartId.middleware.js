const { Car } = require('../models');

const getUsersCartId = async (req)=> {
  const { idUser } = req;
  const cart = await Car.findOne({ where: {idUser} });
  return cart;
};

module.exports = getUsersCartId;