import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    padding: 16,
    color: "red",
    "& p": {
      color: "green",
      "& span": {
        color: "blue"
      }
    }
  }
});

export default function() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      This is red since it is inside the paper
      <p>
        This is green since it is inside the paragraph
        <span> and this is blue since it is inside the span </span>
      </p>
    </div>
  );
}
