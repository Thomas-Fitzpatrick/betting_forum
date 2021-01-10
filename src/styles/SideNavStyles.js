import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1D1566",
    alignItems: "center",
  },
  EventHeader: {
    textAlign: "center",
    color: "white",
  },
  ListItem: {
    borderBottom: "solid white",
    borderBottomWidth: "thin",
  },
}));

export default useStyles;
