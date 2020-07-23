const router = require("express").Router();
const stockController = require("../../controllers/stockController");

// Matches with "/api/tickers"
router.route("/")
  .get(stockController.findAll)
  .post(stockController.create);

// Matches with "/api/tickers/:id"
router
  .route("/:id")
  .get(stockController.findById)
  // .put(booksController.update)
  .delete(stockController.remove);

module.exports = router;
