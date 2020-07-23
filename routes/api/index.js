const router = require("express").Router();
const bookRoutes = require("./stocks");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
