import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';



const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    height: 100,
    width: "100%",
  

  },
  
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <FacebookIcon/>
    
    </div>
  );
};
export default Footer;
