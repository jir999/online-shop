import React from "react";
import Restaurant from "./Restaurant";
import SearchBox from "../../components/SearchBox";
import DropDown from "../../components/DropDown";
import { useDispatch } from "react-redux";
import { fetchedRestaurantsData } from "../../store/actions";
import useFetch from "../../hooks/useFetch";

const RestaurantsList = () => {
    const dispatch = useDispatch();
    //dispatch(fetchedRestaurantsData(useFetch)(dispatch));
    dispatch(fetchedRestaurantsData(useFetch))
    //dispatch(fetchedRestaurantsData(useFetch)).curr(dispatch);

    const handleRestaurantClick = () => {
        console.log("Restaurant Click");
    }

    const handleInputChange = () => { };

    return (
        <div>
            <SearchBox onClick={handleInputChange} />
            <DropDown />
            <p>Restaurants List</p>
            <Restaurant onclick={() => dispatch(handleRestaurantClick("id"))} />
        </div>
    )
};

export default RestaurantsList;