const express = require("express");
const bodyParser = require("body-parser");

const betfair = require("./betfairapi");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Listens for a request for the base events - no parameters
app.get("/api/events", (req, res) => {
  const getevents = async () => {
    const data = await betfair.makeRequest("listEventTypes", { filter: {} });
    var events = data.result.map((x) => x.eventType);
    res.send(events);
  };

  getevents();
});

//Listens for a request for tournaments - one parameter which is the tournament id
app.get("/api/tournaments", (req, res) => {
  const gettournaments = async () => {
    const eventid = req.query.tournamentid;
    const data = await betfair.makeRequest("listCompetitions", {
      filter: { eventTypeIds: [eventid] },
    });

    var events = data.result.map((x) => x.competition);
    res.send(events);
  };

  gettournaments();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
