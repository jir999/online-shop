import React from "react";
import {useSelector} from "react-redux";
import { getRestaurantsList } from "../selectors";

const RestaurantsState = () => {
    const restaurantsData = useSelector((state) => getRestaurantsList(state));

    return restaurantsData;
};

export default RestaurantsState;