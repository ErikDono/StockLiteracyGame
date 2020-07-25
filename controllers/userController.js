const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.userId }, { $push: { stocks: req.params.stockId } }, { new: true })
      .then(dbUSer => res.json(dbUSer))
      .catch(err => res.status(422).json(err));
  },
  sell: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.userId }, { $pull: { stocks: req.params.stockId } }, { new: true })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
