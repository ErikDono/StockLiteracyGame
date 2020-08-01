const mongoose = require("mongoose");
const db = require("../models");
const dataSeed = require("./stockSeed");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/stocklit"
);


const transformedStocks = dataSeed.map((ds) => {

    const performance = ds.historical[11].close - ds.historical[0].open;
    return {
        ...ds,
        performance,
    }
})

db.Stock
    .remove({})
    .then(() => db.Stock.collection.insertMany(transformedStocks))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
