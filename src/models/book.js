const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Enter a name for the book'],
  },
  year: String,
  date_added: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Books', BookSchema);
