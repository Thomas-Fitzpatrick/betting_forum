import React, { useEffect, useState } from "react";
import axios from "axios";

import EventLink from "./EventLink";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/HomeStyles";
import PostList from "./PostList";

export default function Home(props) {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  const goToForum = (id) => {
    props.history.push(`/forum/${id}`);
  };

  const goToEvent = (event_id) => {
    window.location.reload();
  };

  useEffect(() => {
    // Fetching "events", would consist of sports: golf/soccer etc, and political events: 2020 US presidential election etc.
    // Following Betfair's logic
    const fetchEvents = async () => {
      const result_events = await axios(
        "https://jsonplaceholder.typicode.com/albums"
      );
      result_events.data = result_events.data.slice(0, 20);
      setEvents(result_events.data);
    };

    // remove these console.logs once we've verified that this gets called at all the right times. (wait till we have a client side routing directing here)
    console.log("FETCHING EVENTS DATA");
    fetchEvents();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.sidenav}>
        <h1 className={classes.h2}>Event Threads</h1>
        <List component="nav">
          {events.map((event) => (
            <>
              <ListItem button onClick={() => goToEvent()}>
                <EventLink eventtitle={event.title} />
              </ListItem>
            </>
          ))}
        </List>
      </div>

      <PostList goToForum={goToForum} {...props} />
    </div>
  );
}
