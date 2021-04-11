import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
        
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>

        <Switch>
        
          <Route  path="/Home">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}



