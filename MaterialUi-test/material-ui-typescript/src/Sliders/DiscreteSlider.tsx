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
    value: 1,
    label: '1 seat',
  },

  {
    value: 10,
    label: '10 seats',
  },
];

function valuetext(value: any) {
  return `${value} seats`;
}

export default function DiscreteSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);
  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Slider
        value={value}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        min={1}
        max={10}
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleSliderChange}
      />
    </div>
  );

}
