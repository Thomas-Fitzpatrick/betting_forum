import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/GameForumStyles";

export default function GameForum({ id }) {
  const classes = useStyles();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetching game data & comments, will be replaced by query to DB some day
    const fetchPostData = async () => {
      const postRes = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(postRes.data);

      const commentsRes = await axios(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      setComments(commentsRes.data);
    };
    console.log("FETCHING FORUM COMMENTS AND DATA");

    fetchPostData();
  }, [id]);

  return (
    <div className={classes.root}>
      {/* Game info */}
      <div className={classes.post}>
        <Typography variant="h4" component="h2">
          {post.title}
        </Typography>

        <Typography variant="body2" component="p">
          Game Description: {post.body}
        </Typography>

        <Typography variant="body2" component="p">
          User ID: {post.userId}
        </Typography>
      </div>

      <section className={classes.commentSection}>
        <Typography variant="h5" component="h2">
          Comments:
        </Typography>
        <div className={classes.commentList}>
          {/* Will probably need to make a comment component */}
          {comments.map((comment) => (
            <div className={classes.comment}>
              <p>Email: {comment.email}</p>
              <p>Name: {comment.name}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
