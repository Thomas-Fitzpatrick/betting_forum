import React from "react";

import useStyles from "./styles/SideNavStyles.js";

import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import EventLink from "./EventLink";

export default function SideNav({ events }) {
  const classes = useStyles();

  //ReRenderCat is a function passed down by the parent as a prop which will reload the hotposts/eventdata with the new id
  const goToEvent = (cat_title) => {
    console.log(cat_title);
    //ReRenderCat(new_cat_id);
  };

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
              <EventLink eventtitle={event} />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}
