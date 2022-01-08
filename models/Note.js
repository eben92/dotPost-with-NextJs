const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [200, "description cannot be more than 200 characters"],
  },

  link1: {
    type: String,
    required: [true],
  },

  link2: {
    type: String,
    // required: [true],
  },

  link3: {
    type: String,
    // required: [true],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
