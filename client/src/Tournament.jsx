import React from "react";

import SideNavHotPost from "./SideNavHotPost";

export default function Tournament({ id }) {
  const goToMarkets = (id) => {
    console.log("sending you to the market");
    console.log(id);
    //props.history.push(`/markets/${id}`);
  };

  return (
    <SideNavHotPost
      categoryid="Tournament"
      tournieid={id}
      goToNext={(id) => goToMarkets(id)}
    ></SideNavHotPost>
  );
}
