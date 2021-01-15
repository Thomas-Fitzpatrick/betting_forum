import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "gray",
    alignItems: "center",
    marginTop: 10,
    marginRight: 20,
    width: 300,
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
