const Book = require('../models/book');

module.exports = {
  create: async (req, res) => {
    try {
      const book = new Book();
      book.title = req.body.title;
      book.year = req.body.year;
      await book.save();
      res.status(201).json(book);
    } catch (err) {
      res.status(500).send(err)
    }
  },
  findOne: async (req, res) => {
    try {
      const book = await Book.findById({ _id: req.params.id });

      if (!book) {
        res.status(404).json({ message: 'Book not found!' });
      }

      res.status(200).json(book);
    } catch (err) {
      res.status(500).send(err)
    }
  },
  findAll: async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).json(books);
    } catch (err) {
      res.status(404).send(err)
    }
  },
  update: async (req, res) => {
    try {
      const book = await Book.findById({ _id: req.params.id });

      if (!book) {
        res.status(404).json({ message: 'Book not found!' });
      }

      if (req.body.title) {
        book.title = req.body.title
      }

      if (req.body.year) {
        book.year = req.body.year
      }

      if (req.body.created_at) {
        book.created_at = req.body.created_at
      }

      await book.save()

      res.status(200).json(book);
    } catch (err) {
      res.status(500).send(err)
    }
  },
  delete: async (req, res) => {
    try {
      const books = await Book.findByIdAndRemove({ _id: req.params.id });
      res.status(200).json({ message: 'Book Deleted!' })
    } catch (err) {
      res.status(404).send(err)
    }
  }
};
