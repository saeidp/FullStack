import React, { useState, useEffect } from "react";
import { getPeople } from "../api/person-api";
import { Person } from "../api/person-type";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center"
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
    <div>
      <ul className={classes.root}>
        {people.map(x => {
          return (
            <li>
              <img src={x.img} style={{ width: 200, borderRadius: 100 }} />
              {x.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
