const express = require("express");
const router = express.Router();

// mockup data
let borrows = [{ userId: 1, bookId: 2, date: "2024-07-01" }];

// ดูรายการยืมของผู้ใช้
router.get("/users/:userId/borrows", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userBorrows = borrows.filter((b) => b.userId === userId);

  res.status(200).json(userBorrows);
});

// ยืมหนังสือ
router.post("/users/:userId/borrows", (req, res) => {
  const userId = parseInt(req.params.userId);
  const { bookId } = req.body;

  if (!bookId) {
    return res.status(400).json({ message: "bookId is required" });
  }

  const borrowRecord = {
    userId,
    bookId,
    date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
  };

  borrows.push(borrowRecord);
  console.log("New borrow:", borrowRecord);

  res.status(201).json({
    message: "User borrowed book successfully",
    ...borrowRecord,
  });
});

// ดูว่าเล่มนี้เคยถูกยืมโดยใครบ้าง
router.get("/books/:bookId/borrows", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookBorrows = borrows.filter((b) => b.bookId === bookId);

  res.status(200).json(bookBorrows);
});

module.exports = router;
