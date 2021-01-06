import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/ForumCardStyles";

export default function ForumCard({ userId, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          User: {userId}
        </Typography>
      </CardContent>
    </Card>
  );
}
