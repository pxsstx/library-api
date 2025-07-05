const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");
const borrowRoutes = require("./routes/borrows");

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.use("/", borrowRoutes);
app.use("/users", userRoutes);
app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
