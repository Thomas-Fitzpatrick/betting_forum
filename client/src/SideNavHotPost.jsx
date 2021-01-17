import React, { useState, useEffect } from "react";

import SideNav from "./SideNav";
import PostList from "./PostList";

import useStyles from "./styles/SideNavHotPostStyles.js";
import axios from "axios";

export default function SideNavHotPost(props) {
  const classes = useStyles();

  //When we render this component, the childevents will be what show in the side NAV
  //i.e. if we use this component on the home page these child events will be golf, rugby
  //soccer etc. If we use this component on the golf page the child events will be tournaments and so on.
  const [childEvents, setChildEvents] = useState([]);

  const goToForum = (id) => {
    props.history.push(`/forum/${id}`);
  };

  const fetchEvents = async (cat_id) => {
    const events = await axios.get("/api/events".concat(cat_id));
    console.log(events.data);
    setChildEvents(events.data);
  };

  //The fetchEvents function sends a request to our api based off what "category" we are in and determines
  //what is loaded for the child events.

  useEffect(() => {
    const fetchEventData = () => {
      switch (props.categoryid) {
        case "Home":
          console.log("Grabbing baseline events for home page");
          fetchEvents("");
          break;

        default:
          console.log("UNKNOWN CATEGORY TYPE");
          break;
      }
    };
    fetchEventData();
  }, []);

  return (
    <div className={classes.root}>
      <SideNav events={childEvents}> </SideNav>
      <PostList goToForum={goToForum} {...props} />
    </div>
  );
}
