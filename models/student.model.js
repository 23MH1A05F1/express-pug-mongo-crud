const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  marks: Number,
  cgpa: Number
});

module.exports = mongoose.model('Student', StudentSchema);
