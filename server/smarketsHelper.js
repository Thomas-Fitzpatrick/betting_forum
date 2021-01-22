var axios = require("axios");
var fs = require("fs");

async function getEvents(numEvents) {
  let allEvents = [];
  url =
    "https://api.smarkets.com/v3/events/?state=new&state=upcoming&state=live&sort=id&limit=500";
  while (allEvents.length < numEvents) {
    console.log(`calling smarkets at ${url}`);
    let res = await axios.get(url);

    // handles when there's no pages of events
    if (res.data["pagination"]["next_page"] == null) {
      break;
    }

    url =
      url.slice(0, url.lastIndexOf("/") + 1) +
      res.data["pagination"]["next_page"];
    allEvents.push(...res.data["events"]);
  }
  return allEvents;
}

function parseSlugs(slugs) {
  var tree = {};
  for (slug of slugs) {
    let parts = slug.split("/");
    treeLevel = tree;
    for (part of parts.slice(1)) {
      if (part in treeLevel) {
        treeLevel = treeLevel[part];
      } else {
        treeLevel[part] = {};
      }
    }
  }
  return tree;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function parseEvents(events) {
  var tree = {};
  // let counter = 0;
  for (evt of events) {
    // thought I'd have to go easy on the api
    // if (counter > 10) {
    //   console.log("waiting 5 seconds");
    //   await sleep(5000);
    //   counter = 0;
    // }
    // counter += 1;

    let parts = evt["full_slug"].split("/");
    let treeLevel = tree;
    for (part of parts.slice(1)) {
      if (part in treeLevel) {
        treeLevel = treeLevel[part];
      } else {
        treeLevel[part] = {};
      }
    }
    const url = `https://api.smarkets.com/v3/events/${evt["id"]}/markets/?sort=event_id%2Cdisplay_order`;
    console.log(`calling ${url}`);
    const res = await axios.get(url);
    console.log(res.data);
    treeLevel[part] = res.data;
  }
  return tree;
}

events = getEvents(500).then((events) => {
  parseEvents(events).then((tree) => {
    fs.writeFile(
      "events_and_markets.json",
      JSON.stringify(tree),
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });
});

events = getEvents(500).then((events) => {
  slugs = events.map((e) => e["full_slug"]);
  console.log(events);
  console.log(slugs);
  tree = parseSlugs(slugs);
  fs.writeFile("events.json", JSON.stringify(tree), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});
