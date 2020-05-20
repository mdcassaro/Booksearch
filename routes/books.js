const router = require("express").Router();
const searchedBooks = require("./searchedBooks");

// Book routes
router.use("/books", searchedBooks);

module.exports = router;