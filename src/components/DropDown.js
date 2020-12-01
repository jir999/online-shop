import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const DropDown = () => {
    const classes = useStyles();
    const [kitchenType, setKitchenType] = React.useState('');

    const handleSelectChange = (event) => {
        setKitchenType(event.target.value);
    };

    console.log("DropDown Value", kitchenType)

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">KitchenType</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={kitchenType}
                    onChange={handleSelectChange}
                >
                    <MenuItem value={10}>kitchenType1</MenuItem>
                    <MenuItem value={20}>kitchenType2</MenuItem>
                    <MenuItem value={30}>kitchenType3</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default DropDown;