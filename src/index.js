const express = require('express');
const dbConnect = require("./config/dbConfig");
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require("./routes");
const PORT = 3000;
const app = express();
expressConfig(app);
handlebarsConfig(app);

dbConnect()
  .then(() => console.log("DB Connecting succesfully!"))
  .catch(err => console.log("DB error: ", err.message));

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}... `);
  });