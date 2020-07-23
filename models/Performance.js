const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const performanceSchema = new Schema({
    price: { type: Number, required: true },
    date: {
        type: Date,
    },
    month: { type: Number },
    symbol: { type: String, required: true }
});

const Performance = mongoose.model("Performance", performanceSchema);

module.exports = Performance;
