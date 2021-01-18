import React from "react";

import useStyles from "./styles/SideNavStyles.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import EventLink from "./EventLink";

export default function SideNav({ events, goToNext }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.EventHeader}>Event Threads</h3>
      <List component="nav">
        {events.map((event) => (
          <>
            <ListItem
              className={classes.ListItem}
              button
              onClick={() => goToNext(event.id)}
            >
              <EventLink eventtitle={event.name} />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}
