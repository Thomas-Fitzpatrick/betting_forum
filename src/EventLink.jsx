import React from "react";
import useStyles from "./styles/EventLinkStyles";

export default function EventLink({ eventtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.link}>{eventtitle}</div>
    </div>
  );
}
