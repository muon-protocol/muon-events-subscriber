require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Muon Explorer V1" });
});

require("./routes/txs.js")(app);
require("./routes/nodes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
