import React, { useEffect, useState } from "react";
import axios from "axios";

import ForumCard from "./ForumCard";
import EventLink from "./EventLink";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles/HomeStyles";

export default function Home(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]); 
  const [events, setEvents] = useState([]);

  const goToForum = (id) => {
    props.history.push(`/game/${id}`);
  }; 

  const goToEvent = (event_id) => {
    window.location.reload();
  }

  useEffect(() => {
    // Fetching available forums
    const fetchPosts = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts"); 
      setPosts(result.data);
    }; 
    
    // Fetching "events", would consist of sports: golf/soccer etc, and political events: 2020 US presidential election etc. 
    // Following Betfair's logic
    const fetchEvents = async () => { 
      const result_events = await axios("https://jsonplaceholder.typicode.com/albums");  
      result_events.data=result_events.data.slice(0, 20);
      setEvents(result_events.data);
    }
    console.log("FETCHING FORUM DATA");
    fetchPosts(); 
    console.log("FETCHING EVENTS DATA"); 
    fetchEvents(); 
    
  }, []);

  return (
    <div className={classes.root}> 
    
      <div className={classes.nav_post_container}>
      <div className={classes.sidenav}>
      <h1 className={classes.h2}>Event Threads</h1> 
      <List component="nav">
        {events.map((event) => (
        <>
        <ListItem button onClick={() => goToEvent()}>
          <EventLink eventtitle={event.title}/>
        </ListItem>
        </>
        ))}
      </List>
      </div>
       
      <div className={classes.HotPosts}>
<<<<<<< HEAD
<<<<<<< HEAD
      <h1 className={classes.HotPostHeader}>Hot Posts</h1> 
=======
      <h1 className={classes.h1}>Hot Posts</h1> 
>>>>>>> 048884b... Added navigation for event links
=======
      <h1 className={classes.HotPostHeader}>Hot Posts</h1> 
>>>>>>> a106866... Prettier
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
      </div> 
    </div> 
  );
}
