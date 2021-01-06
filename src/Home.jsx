import React, { useEffect, useState } from "react";
import axios from "axios";

import ForumCard from "./ForumCard";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/HomeStyles";

export default function Home(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  const goToForum = (id) => {
    props.history.push(`/game/${id}`);
  };

  useEffect(() => {
    // Fetching available forums
    const fetchPosts = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(result.data);
    };
    console.log("FETCHING FORUM DATA");
    fetchPosts();
  }, []);

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {posts.map((post) => (
          <>
            <ListItem button onClick={() => goToForum(post.id)}>
              <ForumCard userId={post.userId} title={post.title} id={post.id} />
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}
