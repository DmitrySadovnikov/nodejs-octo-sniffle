// Import any required models here
const Book = require('../models/book');

// Define your service methods
exports.getBooks = async () => {
  return await Book.find();
};

exports.createBooks = async (name) => {
  const book = new Book({ name });
  return await book.save();
};
