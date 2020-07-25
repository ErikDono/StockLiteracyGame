const mongoose = require("mongoose");
const db = require("../models");
const ALGT = require('./ALGT');
const BKNG = require('./BKNG');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/stocklit"
);

const stocksSeed = [
  { ALGT }, { BKNG }
];

const data = [{ symbol: 'ALGT', historical: ALGT },]

db.Stock
  .remove({})
  .then(() => db.Stock.collection.insertMany(stocksSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
