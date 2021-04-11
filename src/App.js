import React ,{useState,useEffect} from "react";
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
import axios from "axios";


export default function App() {

   const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json").then(res => {
      console.log(res);
      setData(res.data);
    });
  }, []);
  return (
    <Router>
      <div>
        <ul>
        
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Switch>
        
          <Route  path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}



