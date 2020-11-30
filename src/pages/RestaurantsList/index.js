import React from "react";
import Restaurant from "./Restaurant";

const RestaurantsList = () => {
    const handleRestaurantClick = () => {
        console.log("Restaurant Click");
    }

    return (
        <div>
            <Restaurant onclick={handleRestaurantClick} />
        </div>
    )
};

export default RestaurantsList;