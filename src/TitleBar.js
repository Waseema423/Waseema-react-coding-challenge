import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    height: 60,
    width: "100%"
  },
  bar: {
    marginLeft: 200,
    color: "white",
    padding: 10,
  }
});

const Title = ({props}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.bar}>
        Popular {props.name}
      </Typography>
    </div>
  );
};
export default Title;
