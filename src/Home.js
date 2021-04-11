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
import axios from "axios";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const Item = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}


function Home() {
  
  
   let { path, url } = useRouteMatch();


 
  return (
    <div>
    <ButtonAppBar />
      <AppBar />
      <Title name={"Titles"} />
    
       <img src="https://github.com/StreamCo/react-coding-challenge/raw/master/assets/placeholder.png"/>
          <Link to={`${url}/Series`}>Series</Link>
        
          <Link to={`${url}/Movies`}>
      
      <img src="https://github.com/StreamCo/react-coding-challenge/raw/master/assets/placeholder.png"/>

          
            Movies
          </Link>
          
     <Route path={`${path}/:name`}>
        <Item />
      </Route>
  
    </div>
  );
}
export default Home;

