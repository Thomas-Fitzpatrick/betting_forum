import React from "react";

import useStyles from "./styles/SideNavStyles.js";

import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import EventLink from "./EventLink";

export default function SideNav({ events }) {
  const classes = useStyles();

  const goToEvent = (cat_title) => {
    console.log(cat_title);
    //ReRenderCat(new_cat_id);
  };
  console.log("Got the events!");
  console.log(events);

  return (
    <div className={classes.root}>
      <h3 className={classes.EventHeader}>Event Threads</h3>
      <List component="nav">
        {events.map((event) => (
          <>
            <ListItem
              className={classes.ListItem}
              button
              onClick={() => goToEvent(event)}
            >
              <EventLink eventtitle={event.Name} />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}
