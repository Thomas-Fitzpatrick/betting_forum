import React from "react";

import SideNav from "./SideNav";
import PostList from "./PostList";

import useStyles from "./styles/SideNavHotPostStyles.js";
import axios from "axios";

export default function SideNavHotPost(props) {
  const classes = useStyles();

  const goToForum = (id) => {
    props.history.push(`/forum/${id}`);
  };

  const fetchEventData = () => {
    switch (props.categoryid) {
      case "Home":
        console.log("Grabbing baseline events for home page");
        //const event_data = await axios.post(
        //  "https://api.smarkets.com/v3/events/?state=new&state=upcoming&state=live&sort=id&limit=20",
        //  {
        //    headers: { crossdomain: true },
        //  }
        //);
        const event_data = {
          data: [
            "Golf",
            "Soccer",
            "Tennis",
            "Rugby",
            "Darts",
            "Swimming",
            "Politics",
          ],
        };
        return event_data.data;
        break;

      default:
        console.log("UNKNOWN CATEGORY TYPE");
        break;
    }
  };

  const childEvents = fetchEventData();

  return (
    <div className={classes.root}>
      <SideNav events={childEvents}> </SideNav>
      <PostList goToForum={goToForum} {...props} />
    </div>
  );
}
