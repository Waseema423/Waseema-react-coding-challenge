import React from "react";
import "./style.css";
import ButtonAppBar from "./ButtonAppBar.js";
import AppBar from "@material-ui/core/AppBar";
import Title from "./TitleBar";
import Footer from "./Footer";
import Content from "./Content"


function Series() {
  return (
    <div>
      <ButtonAppBar />
      <AppBar />
      <Title name={"Series"} />
      <Content/>
      <Footer/>
    </div>
  );
}
export default Series;