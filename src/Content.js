import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import MovieIcon from '@material-ui/icons/Movie';
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    height: 400,
    width: "100%",
    display:"block",
  

  },
  card:{
    paddingTop:20,
    maxWidth:200,
    height :100,
    backgroundColor:"black",
  }

  
});

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <br/>
    <div className={classes.card}/>
    <br/>
    <div className={classes.card}/>

    
  
    </div>
  );
};
export default Content;
