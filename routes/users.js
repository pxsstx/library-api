const express = require("express");
const router = express.Router();

// mockup data user
let users = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    password: "qwerty456",
  },
  {
    id: 3,
    username: "alex99",
    email: "alex99@example.com",
    password: "letmein789",
  },
];

// GET all users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// GET user by ID
router.get("/:userId", (req, res) => {
  const id = parseInt(req.params.userId);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// CREATE new user
router.post("/", (req, res) => {
  const body = req.body;

  const newUser = {
    id: users.length + 1,
    username: body.username,
    email: body.email,
    password: body.password,
  };

  users.push(newUser);
  console.log("Created user:", newUser);

  res.status(201).send("Create user successful");
});

// PATCH update user
router.patch("/:userId", (req, res) => {
  const body = req.body;
  const id = parseInt(req.params.userId);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users[index] = {
    ...users[index],
    username: body.username || users[index].username,
    email: body.email || users[index].email,
    password: body.password || users[index].password,
  };

  console.log("Updated user:", users[index]);

  res.status(200).send("Update user successful");
});

// DELETE user
router.delete("/:userId", (req, res) => {
  const id = parseInt(req.params.userId);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  const deletedUser = users.splice(index, 1)[0];

  console.log("Deleted user:", deletedUser);

  res.status(200).send("Delete user successful");
});

module.exports = router;
