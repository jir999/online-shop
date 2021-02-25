import useStyles from './style';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

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

const InputRange = () => {
    const classes = useStyles();
    const [value, setValue] = useState([0, 1500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid className={classes.root} container spacing={2}>
            <Grid item xs={12}>
                <Typography id="range-slider" gutterBottom>
                    Price range
                </Typography>
            </Grid>
            <Grid item xs={12}>
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
        </Grid>
    );
};

export default InputRange;

// aria-labelledby="range-slider"


// <Typography id="range-slider" gutterBottom>
//           Temperature range
//         </Typography>