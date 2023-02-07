const CartsServices = require('../services/carts.service')

const getCartByIdUser = async (req, res, next)=> {
  try {
    const { id } = req.body;
    const cart = await CartsServices.getByUserId(id);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next)=> {
  try {
    const cartData = req.body;
    const result = await CartsServices.addProduct(cartData);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCartByIdUser, addProductToCart };
