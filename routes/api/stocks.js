const router = require("express").Router();
const stockController = require("../../controllers/stockController");

// Matches with "/api/stock"
router.route("/stocks")
  .get(stockController.findAll)
  .post(stockController.add);

// Matches with "/api/stock/:id"
// router
//   .route("/:id")
//   .put(stockController.update)

module.exports = router;
