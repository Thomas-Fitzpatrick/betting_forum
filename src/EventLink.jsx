import React from "react";

<<<<<<< HEAD
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
=======
>>>>>>> 9af9491... Added navigation for event links
import useStyles from "./styles/EventLinkStyles";

export default function EventLink({ eventtitle }) {
  const classes = useStyles();

  return ( 
    
    <div className={classes.root} > 
    <div className={classes.link}>
    {eventtitle}
    </div>
    </div>
  );
}