// AUTHORS CONTROLLERS
const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// ALL AUTHORS ROUTE
router.get("/", async (req, res) => {
  try {
    const authors = await Author.find({}); //get all the authors in mongodb
    res.render("authors/index", { authors: authors});
  } catch (err) {
    res.redirect("/");
  }
});

// NEW AUTHOR ROUTE
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() }); //para saan kaya to (1)
});

// CREATING NEW AUTHOR ROUTE
router.post("/", async (req, res) => {
  const author = new Author({
    //para saan kaya to (2)
    name: req.body.author_name,
  });
  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`authors/`);
  } catch (err) {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating author",
    });
  }
});

module.exports = router;
