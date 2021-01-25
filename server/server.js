const express = require("express");
const bodyParser = require("body-parser");
const route_handler = require("./db_queries");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route_handler);

app.listen(port, () => console.log(`Listening on port ${port}`));
