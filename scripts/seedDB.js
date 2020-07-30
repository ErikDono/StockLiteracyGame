const mongoose = require("mongoose");
const db = require("../models");
const AAPL = require('./AAPL');
const ADBE = require('./ADBE');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/stocklit"
);

// const stocksSeed = [
//   { AAPL }, { ADBE }
// ];

const dataSeed = [{ symbol: 'AAPL', historical: AAPL }, { symbol: 'ADBE', historical: ADBE },]

db.Stock
  .remove({})
  .then(() => db.Stock.collection.insertMany(dataSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
