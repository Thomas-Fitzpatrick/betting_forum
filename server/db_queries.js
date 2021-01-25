const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const conn_string =
  "mongodb+srv://admin:passwordpassword@cluster0.wapen.mongodb.net/plusev?retryWrites=true&w=majority";

//connect to our database which currently has 3 tables:
//events/tournaments/markets
mongoose.connect(conn_string, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to the plusev database.");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongodb", err);
});

//defining the schemas/models corresponding to the existing tables in the db

const eventschema = new mongoose.Schema({});
const tournamentschema = new mongoose.Schema({});
const marketschema = new mongoose.Schema({});

var events = mongoose.model("event", eventschema);
var tournaments = mongoose.model("tournament", tournamentschema);
var markets = mongoose.model("market", marketschema);

router.get("/api/events", async (req, res, next) => {
  try {
    events_data = await events.find({});
    res.send(events_data);
  } catch (err) {
    next(err);
  }
});

router.get("/api/tournaments", async (req, res) => {
  try {
    let eventid = parseInt(req.query.eventid);
    tournaments_data = await tournaments.find({ EventID: eventid });
    res.send(tournaments_data);
  } catch (err) {
    next(err);
  }
});

router.get("/api/markets", async (req, res) => {
  try {
    let tournamentid = parseInt(req.query.tournamentid);
    markets_data = await markets.find({ TournamentID: tournamentid });
    res.send(markets_data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
