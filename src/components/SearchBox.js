import React from "react";
import {useDispatch} from "react-redux";
import {handleInputChange} from "../store/actions";
import Input from '@material-ui/core/Input';

const SearchBox = ({flag}) => {
    const dispatch = useDispatch();
    return (
        <Input className="searchBox" onChange={(e) => dispatch(handleInputChange(e.target.value))} placeholder="Search by name" />
    )
};

export default SearchBox;