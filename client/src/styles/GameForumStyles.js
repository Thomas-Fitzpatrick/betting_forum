import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  post: {
    marginTop: "5em",
  },
  commentSection: {
    marginTop: "5em",
  },
  commentList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  comment: {
    border: "2px solid grey",
    margin: "5px",
  },
}));

export default useStyles;
