const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  sector: { type: String },
  symbol: { type: String, required: true },
  PE: {},
  EPS: {},
  dividend: {},
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
