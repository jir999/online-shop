import React, {useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import { fetchedKitchenTypes } from "../store/actions";
import { useSelector } from "react-redux";
import { getDropDownData } from "../store/selectors";
import {handleDropDownChange} from "../store/actions";

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
    const dispatch = useDispatch();
    const data = useFetch("./kitchenTypes.json");

    console.log("dropDownData", data);

    useEffect(() => {
        dispatch(fetchedKitchenTypes(data));
    },[data])

    const { dropDownData } = useSelector((state) => {
        console.log("selector");
        return {dropDownData: getDropDownData(state)}
    })

    console.log("dropDownData Selector", dropDownData);

    const classes = useStyles();
    const [kitchenType, setKitchenType] = useState('all');



    const handleSelectChange = (event) => {
        dispatch(handleDropDownChange(event.target.value));
        setKitchenType(event.target.value);
    };


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
                    
                    {dropDownData.length ? dropDownData.map((item) => <MenuItem value={item.abbr}>{item.name}</MenuItem>) : <p>Loading</p>}
                </Select>
            </FormControl>
        </div>
    )
}

export default DropDown;