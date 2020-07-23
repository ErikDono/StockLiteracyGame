const db = require("../models");

// Defining methods for the stockController
module.exports = {
    update: function (req, res) {
        db.Stock
            .put(req.body)
            .then(dbStock => res.json(dbStock))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Stock
            .find({})
            .then(dbStock => res.json(dbStock))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Stock
            .findById({ _id: req.params.id })
            .then(dbStock => dbStock.remove())
            .then(dbStock => res.json(dbStock))
            .catch(err => res.status(422).json(err));
    }
}