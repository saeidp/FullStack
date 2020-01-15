import React, { useState, useEffect } from "react";
import { getPeople } from "../api/person-api";
import { Person } from "../api/person-type";
import { createStyles, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import clsx from "clsx";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 25,
      margin: 25
    },
    card: {
      maxWidth: 345
    },
    pageWidth: {
      width: "100vw"
    }
  })
);

export const PeopleManager = () => {
  const classes = useStyles();
  const initialValue: Person[] = [];
  const [people, setPeople] = useState(initialValue);
  useEffect(() => {
    const fetch = () => {
      const myPeople = getPeople();
      setPeople(myPeople);
    };
    fetch();
  }, []);

  return (
    <Grid
      container={true}
      className={clsx(classes.root, classes.pageWidth)}
      spacing={1}
    >
      {people.map(x => (
        <Grid item={true} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={x.name}
                height="300"
                image={x.img}
                title={x.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {x.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {x.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link href={x.url}>Facebook</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
