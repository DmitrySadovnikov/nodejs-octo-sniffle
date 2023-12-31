const books = require('../controllers/booksController');

module.exports = (app) => {
  app.route('/books')
    .get(books.findAll)
    .post(books.create);

  app.route('/books/:id')
    .get(books.findOne)
    .put(books.update)
    .delete(books.delete);
};
