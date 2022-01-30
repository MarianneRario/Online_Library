const mongoose = require("mongoose");

// SCHEMA
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// EXPORT SCHEMA
module.exports = mongoose.model("Author", authorSchema);
