import { Route, Switch, BrowserRouter } from "react-router-dom";

import GameForum from "./GameForum";
import Home from "./Home";

import Container from "@material-ui/core/Container";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            exact
            path="/game/:gameId"
            render={(routeProps) => (
              <GameForum id={routeProps.match.params.gameId} {...routeProps} />
            )}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
