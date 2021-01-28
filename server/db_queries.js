const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const conn_string = require("./configs");

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
const matchschema = new mongoose.Schema({});
const marketschema = new mongoose.Schema({});

var events = mongoose.model("event", eventschema);
var tournaments = mongoose.model("tournament", tournamentschema);
var matches = mongoose.model("matche", matchschema);
var markets = mongoose.model("market", marketschema);

class dbHandler {
  constructor() {}

  async getEvents() {
    try {
      const eventsdata = await events.find({});
      return eventsdata;
    } catch (err) {
      console.log(err);
      return {};
    }
  }

  async getTournaments(eventtypeid) {
    try {
      console.log(eventtypeid);
      const tournamentsdata = await tournaments.find({ EventID: eventtypeid });
      return tournamentsdata;
    } catch (err) {
      return {};
    }
  }

  async getMatches(tournamentid) {
    try {
      const matches_data = await matches.find({ TournamentID: tournamentid });
      return matches_data;
    } catch (err) {
      return {};
    }
  }

  async getMarkets(matchid) {
    try {
      const market_data = await markets.find({ MatchID: matchid });
      return market_data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = dbHandler;
