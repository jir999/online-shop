import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 300,
    marginLeft: "10px"
  }
});

const marks = [
  {
    value: 0,
    label: "Min"
  },
  {
    value: 1500,
    label: "Max"
  }
];

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = () => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 1500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Grid container spacing={2}>
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="discrete-slider-always"
          step={100}
          marks={marks}
          max={1500}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
        />
      </Grid>
    </div>
  );
};

export default RangeSlider;

// aria-labelledby="range-slider"