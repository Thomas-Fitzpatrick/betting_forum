import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./styles/NavbarStyles";

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavLink exact activeClassName={classes.active} to="/">
        Home
      </NavLink>
      <NavLink activeClassName={classes.active} to="/category/golf">
        Category Eg
      </NavLink>
      <NavLink activeClassName={classes.active} to="/tournament/PGAChamp">
        Tournament Eg
      </NavLink>
    </div>
  );
}
