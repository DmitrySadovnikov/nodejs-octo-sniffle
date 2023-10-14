const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/booksRoutes');
const Book = require('./models/book');
const seeds = require('./seeds.js');
const app = express();
const cors = require('cors');
const config = require('./config/config');

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

mongoose.connect(config.databaseUrl).then(() => console.log('Connected!'));

mongoose.connection.on('connected', async () => {
  try {
    await Book.deleteMany({});
    await Book.create(seeds.books);
  } catch (err) {
    console.log(err);
  }
});

app.listen(config.port, () => {
  console.log('Listening on port ' + config.port);
});
