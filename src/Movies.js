import React from "react";
import "./style.css";
import ButtonAppBar from "./ButtonAppBar.js";
import AppBar from "@material-ui/core/AppBar";
import Title from "./TitleBar";
import Footer from "./Footer";
import Content from "./Content"


function Movies() {
  return (
    <div>
      <ButtonAppBar />
      <AppBar />
      <Title {name = "movies"} />
      <Content/>
      <Footer/>
    </div>
  );
}
export default Movies;