const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {

    },
    tickers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Ticker"
        }
    ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
