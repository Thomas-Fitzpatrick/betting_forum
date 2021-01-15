import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  HotPostHeader: {
    fontSize: 40,
    color: "red",
  },
}));

export default useStyles;
