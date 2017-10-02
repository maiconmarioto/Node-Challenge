const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const employee = require('./app/routes/employee');
const config = require('config');
const cors = require('cors');

const options = { keepAlive: 1, connectTimeoutMS: 30000, useMongoClient: true };

mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost, options);
const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error while connecting to the DB...: ')
);

console.log(config.util.getEnv('NODE_ENV'));
if (config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined'));
  app.use(cors());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) =>
  res.json({ message: 'Welcome to the API of SamConnect challenge!' })
);

app
  .route('/employees')
  .get(employee.getAllEmployees)
  .post(employee.saveEmployee);

app.listen(port);
console.log('Running on port ' + port);

module.exports = app;
