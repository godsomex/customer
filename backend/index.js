const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const bodyParser = require("body-parser");
const Customer = require("./models/Customer");
const createHandlers = require("./handlers");

const app = express();
const port = 9000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const db = config.get("mongoURI");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const {
  getCustomers,
  postCustomers,
  updateCustomers,
  deleteCustomers,
} = createHandlers({
  Customer,
});

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", getCustomers);
app.post("/", postCustomers);
app.patch("/:id", updateCustomers);
app.delete("/:id", deleteCustomers);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
