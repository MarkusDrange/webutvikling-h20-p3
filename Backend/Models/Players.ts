const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  id: Number,
  first_name: String,
  lastName: String,
  goalsScored: Number,
  assists: Number,
  vote: Number,
});


module.exports = mongoose.model("players", PlayerSchema);
