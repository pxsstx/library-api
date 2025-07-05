const express = require("express");
const router = express.Router();

// mockup data books
let books = [
  {
    id: 1,
    name: "1984",
    year: 1949,
    author: "George Orwell",
    borrow: false,
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    year: 1960,
    author: "Harper Lee",
    borrow: true,
  },
  {
    id: 3,
    name: "The Great Gatsby",
    year: 1925,
    author: "F. Scott Fitzgerald",
    borrow: false,
  },
];

// GET all books
router.get("/", (req, res) => {
  res.status(200).json(books);
});

// GET book by ID
router.get("/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// CREATE new book
router.post("/", (req, res) => {
  const body = req.body;

  const newBook = {
    id: books.length + 1,
    name: body.name,
    year: body.year,
    author: body.author,
    borrow: body.borrow ?? false, // default false
  };

  books.push(newBook);
  console.log("Created book:", newBook);

  res.status(201).json({ message: "Book created successfully", book: newBook });
});

// UPDATE book
router.patch("/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  const body = req.body;

  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }

  books[index] = {
    ...books[index],
    name: body.name ?? books[index].name,
    year: body.year ?? books[index].year,
    author: body.author ?? books[index].author,
    borrow: body.borrow ?? books[index].borrow,
  };

  console.log("Updated book:", books[index]);

  res
    .status(200)
    .json({ message: "Book updated successfully", book: books[index] });
});

// DELETE book
router.delete("/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);

  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }

  const deletedBook = books.splice(index, 1)[0];
  console.log("Deleted book:", deletedBook);

  res
    .status(200)
    .json({ message: "Book deleted successfully", book: deletedBook });
});

module.exports = router;
