const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const db      = require('./utils/database');
const initModel = require('./models/init.Model');
const { handleError } = require('./middlewares');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/users.route');
const productRoutes = require('./routes/products.route');
const orderRoutes = require('./routes/orders.route');

const cartRoutes = require('./routes/carts.route');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModel();

db.sync()
.then(()=> console.log('Base de datos sincronizada'))
.catch((error)=> console.log(error));

db.authenticate()
.then(()=> console.log('Base de datos autenticada'))
.catch((error) => console.log(error));

app.use('/api/v1/', authRoutes);
app.use('/api/v1/', userRoutes);
app.use('/api/v1/', productRoutes);
app.use('/api/v1/', cartRoutes);
app.use('/api/v1/', orderRoutes);

app.use(handleError);
routerApi(app);

module.exports = app;