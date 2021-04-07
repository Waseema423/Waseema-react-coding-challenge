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
    height: 300,
    width: "100%",
  

  },
  card:{
    paddingTop:20,
    maxWidth:225,
    height :100,
    backgroundColor:"gray"
  }

  
});

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Card  className={classes.card}>
    <CardActionArea>
    <CardMedia
          component="img"
      
          height="140"
          
          image ="https://github.com/StreamCo/react-coding-challenge/blob/master/screens/1-home.jpg" 

          />
          </CardActionArea>
    
    </Card>
    </div>
  );
};
export default Content;
