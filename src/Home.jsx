import React, { useEffect, useState } from "react";
import axios from "axios";

import EventLink from "./EventLink";
import PostList from "./PostList";
import SideNav from "./SideNav";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/HomeStyles";

export default function Home(props) {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  const goToForum = (id) => {
    props.history.push(`/forum/${id}`);
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
      <div className={classes.nav_post_container}>
        <SideNav></SideNav>
        <PostList goToForum={goToForum} {...props} />
      </div>
    </div>
  );
}
