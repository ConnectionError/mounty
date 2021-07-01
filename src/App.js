import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import Landing from "./Components/Landing/Landing";
import MainNav from "./Components/Navigation/MainNav";
import NewMoviesList from "./Components/Newmovies/Movielist/NewMoviesList";
import TopMovieList from "./Components/Toprated/Movielist/TopMovieList";

function App() {
  return (
    <Router>
      <MainNav />
      <main>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/future" exact>
            <NewMoviesList />
          </Route>
          <Route path="/toprated" exact>
            <TopMovieList />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
