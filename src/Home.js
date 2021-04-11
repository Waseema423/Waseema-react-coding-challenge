import React from "react";
import "./style.css";
import ButtonAppBar from "./ButtonAppBar.js";
import AppBar from "@material-ui/core/AppBar";
import Title from "./TitleBar";
import Footer from "./Footer";
import Content from "./Content";
import Series from "./Series";
import Movies from "./Movies";
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

 const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    height: 300,
    width: "100%",
    display:"block",
  },
 });
function Home() {
  let match = useRouteMatch();
  const classes = useStyles();

 
  return (
    <div>
    <ButtonAppBar />
      <AppBar />
      <Title name={"Titles"} />
      
<div className ={classes.root}>
      
      <img src="https://github.com/StreamCo/react-coding-challenge/raw/master/assets/placeholder.png"/>
          <Link to={`${match.url}/Series`}>Series</Link>
        
          <Link to={`${match.url}/Movies`}>
      
      <img src="https://github.com/StreamCo/react-coding-challenge/raw/master/assets/placeholder.png"/>

          
            Movies
          </Link>
    <Router>
      <Switch>
               <Route  path="/Series" component={Series}/>
               <Route path="/Movies" component={Movies}/>
            </Switch>
            </Router>

</div>
    
      <Footer/>
    </div>
  );
}
export default Home;

