import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import SearchBox from "../../components/SearchBox";
import DropDown from "../../components/DropDown";
import { useDispatch } from "react-redux";
import { fetchedRestaurantsData } from "../../store/actions";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { getRestaurantsList } from "../../store/selectors";

const RestaurantsList = () => {

    useEffect(() => {
        dispatch(fetchedRestaurantsData(useFetch));
    })

    const { RestaurantsList } = useSelector((state) => ({
        RestaurantsList: getRestaurantsList(state),
    }))

    console.log("restaurants", RestaurantsList)


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