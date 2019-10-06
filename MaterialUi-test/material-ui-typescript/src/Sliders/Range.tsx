import React from 'react';
import { makeStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: 50

  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 50,
    label: '50 sqm',
  },

  {
    value: 400,
    label: '400 sqm',
  },
];

function valuetext(value: any) {
  return `${value} sqm`;
}
export default function Range() {
  const classes = useStyles();
  const [value, setValue] = React.useState([120, 280]);
  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Slider
        value={value}
        getAriaValueText={valuetext}
        aria-labelledby="range-slider"
        step={10}
        min={50}
        max={400}
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleSliderChange}

      />
    </div>
  );

}
