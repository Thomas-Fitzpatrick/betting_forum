import React from "react";

import SideNavHotPost from "./SideNavHotPost";

export default function Home(props) {
  const goToTournament = (id) => {
    props.history.push(`/tournament/${id}`);
  };

  return (
    <SideNavHotPost
      categoryid="Home"
      goToNext={(id) => goToTournament(id)}
      {...props}
    ></SideNavHotPost>
  );
}
