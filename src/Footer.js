import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';




const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
   width: "100%",
    color:"white",
    marginBottom:0,
   },
  imag:{
width:135,
height:40,



  },
group:{marginLeft:800,},
  
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <p>Home| Privacy Policy | Registration| Help </p>
    <p> Copyright <CopyrightIcon /> Reserved </p>
    
    <div>
    <FacebookIcon/>&nbsp;&nbsp;
    
    <InstagramIcon/>&nbsp;&nbsp;
    <TwitterIcon/>

    <img className ={classes.group}src="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/517276bfb32858ed26fa4cc52a8fecb68476f85a/assets/store/play-store.svg"/>&nbsp;&nbsp;

    <img src="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/517276bfb32858ed26fa4cc52a8fecb68476f85a/assets/store/app-store.svg"/>
    <img className={classes.imag} src="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/517276bfb32858ed26fa4cc52a8fecb68476f85a/assets/store/windows-store.svg"/>
    
</div>
  
    </div>
  );
};
export default Footer;
