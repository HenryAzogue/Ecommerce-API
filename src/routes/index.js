const authRoutes     = require('./auth.route');
const usersRoutes    = require('./users.route');
const productsRoutes = require('./products.route');
const ordersRoutes   = require('./orders.route');

const routerApi = (app)=> {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/users', usersRoutes);
  app.use('/api/v1/products', productsRoutes);
  app.use('/api/v1/orders', ordersRoutes);
};

module.exports = routerApi;