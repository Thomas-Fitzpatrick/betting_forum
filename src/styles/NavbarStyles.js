import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "6vh",
    backgroundColor: "grey",
  },
  active: {
    fontWeight: "bold",
    color: "red",
  },
}));

export default useStyles;
