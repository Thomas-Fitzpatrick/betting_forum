import React, { useEffect, useState } from "react";
import useStyles from "./styles/SideNavStyles.js";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EventLink from "./EventLink";

export default function SideNav(category_id, ReRenderCat) {
  const [categories, setCategories] = useState([]);
  const classes = useStyles();

  //ReRenderCat is a function passed down by the parent as a prop which will reload the hotposts/eventdata with the new id
  const goToEvent = (cat_title) => {
    console.log(cat_title);
    //ReRenderCat(new_cat_id);
  };

  useEffect(() => {
    const fetchCategories = async (category_id) => {
      const result_categories = await axios(
        "https://jsonplaceholder.typicode.com/albums"
      );
      result_categories.data = result_categories.data.slice(0, 20);
      setCategories(result_categories.data);
    };

    fetchCategories();
  }, []);

  return (
    <div className={classes.root}>
      <h3 className={classes.EventHeader}>Event Threads</h3>
      <List component="nav">
        {categories.map((category) => (
          <>
            <ListItem
              className={classes.ListItem}
              button
              onClick={() => goToEvent(category.title)}
            >
              <EventLink eventtitle={category.title} />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}
