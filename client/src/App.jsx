import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";
import GameForum from "./GameForum";
import Home from "./Home";

import Container from "@material-ui/core/Container";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            exact
            path="/category/:catId"
            render={(routeProps) => (
              <Home
                category
                id={routeProps.match.params.catId}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/tournament/:tournamentId"
            render={(routeProps) => (
              <Home
                tournament
                id={routeProps.match.params.tournamentId}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/forum/:forumId"
            render={(routeProps) => (
              <GameForum id={routeProps.match.params.forumId} {...routeProps} />
            )}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
