import React from "react";

import SideNavHotPost from "./SideNavHotPost";

import useStyles from "./styles/HomeStyles";

export default function Home(props) {
  const classes = useStyles();

  const goToForum = (id) => {
    props.history.push(`/forum/${id}`);
  };

  return <SideNavHotPost categoryid="Home" {...props}></SideNavHotPost>;
}
