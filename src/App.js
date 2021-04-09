 import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";



export default function App() {
  return (
    <Router>
      <div>
        
      <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/Series" component={Series}/>

<Route exact path="/Movies" component={Movies}/>
</Switch>
      </div>
    </Router>
  );
}