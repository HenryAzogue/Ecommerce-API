const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const db      = require('./utils/database');
const initModels = require('./models/init.model');
const { handleError } = require('./middlewares');
const { routerApi } = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels(app);

db.sync({ force: false })
  .then(()=> console.log('Base de datos sincronizada'))
  .catch((error)=> console.log(error));

db.authenticate()
  .then(()=> console.log('Base de datos autenticada'))
  .catch((error) => console.log(error));

app.use(handleError);
routerApi(app);

module.exports = app;