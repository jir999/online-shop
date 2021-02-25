import { useState, useEffect } from 'react';
import useStyles from './style';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { fetchedKitchenTypes } from '../../store/actions/dropDownData';
import { handleDropDownChange } from '../../store/actions/dropDownValue';
import { getDropDownData } from '../../store/selectors';

const DropDown = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useFetch('./kitchenTypes.json');

    console.log("dropDownData", data);

    useEffect(() => {
        dispatch(fetchedKitchenTypes(data));
    }, [data])

    const { dropDownData } = useSelector((state) => {
        return { dropDownData: getDropDownData(state) }
    })

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