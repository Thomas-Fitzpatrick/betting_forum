const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/events", (req, res) => {
  res.send([
    {
      EventName: "Golf",
      EventId: 1,
    },
    { EventName: "Rugby", EventId: 2 },
    { EventName: "Tennis", EventId: 3 },
    { EventName: "Hurling", EventId: 4 },
    { EventName: "Baseball", EventId: 5 },
    { EventName: "Basketball", EventId: 6 },
    { EventName: "Cricket", EventId: 7 },
    { EventName: "Politics", EventId: 7 },
  ]);
});

///stuff about a post request from an example just left it in here
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
