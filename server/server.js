const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const dbHandler = require("./db_queries");

const db_handler = new dbHandler();

console.log(db_handler);

router.get("/api/events", async (req, res, next) => {
  data = await db_handler.getEvents();
  res.send(data);
});

router.get("/api/tournaments", async (req, res, next) => {
  let eventid = parseInt(req.query.eventid);
  data = await db_handler.getTournaments(eventid);
  res.send(data);
});

router.get("/api/matches", async (req, res, next) => {
  let tournamentid = parseInt(req.query.tournamentid);
  data = await db_handler.getMatches(tournamentid);
  res.send(data);
});

router.get("/api/markets", async (req, res, next) => {
  let matchid = parseInt(req.query.matchid);
  data = await db_handler.getMarkets(matchid);
  res.send(data);
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));
