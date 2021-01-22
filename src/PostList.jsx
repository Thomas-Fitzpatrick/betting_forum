import React, { useEffect, useState } from "react";
import axios from "axios";

import ForumCard from "./ForumCard";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/PostListStyles";

export default function PostList(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const { goToForum, category, tournament, id } = props;

  useEffect(() => {
    // Fetching available forums
    const fetchPosts = async () => {
      console.log(category, tournament, id);
      let postQuery = "";
      if (category) {
        //will use id in these cases when querying DB for posts
        postQuery = "https://jsonplaceholder.typicode.com/posts";
      } else if (tournament) {
        //will use id in these cases when querying DB for posts
        postQuery = "https://jsonplaceholder.typicode.com/posts";
      } else {
        postQuery = "https://jsonplaceholder.typicode.com/posts";
      }
      const result = await axios(postQuery);
      setPosts(result.data);
    };

    // remove these console.logs once we've verified that this gets called at all the right times. (wait till we have a client side routing directing here)
    console.log("FETCHING FORUM DATA");
    fetchPosts();
  }, [category, tournament, id]);

  return (
    <div className={classes.root}>
      <h1 className={classes.HotPostHeader}>{`${
        id ? id : ""
      } not Hot Posts`}</h1>
      <List component="nav" aria-label="secondary mailbox folders">
        {posts.map((post) => (
          <ListItem key={post.id} button onClick={() => goToForum(post.id)}>
            <ForumCard userId={post.userId} title={post.title} id={post.id} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
