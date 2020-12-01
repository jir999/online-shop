export const dropdownSelect = "dropdownSelect";
export const inputChange = "inputChange";
export const restaurantClick = "restaurantClick";
export const fetchRestaurantsSuccess = "fetchRestaurantsSuccess";

// export const fetchedRestaurantsSuccess = (fetchedData) => ({
//     type: fetchRestaurantsSuccess,
//     fetchedData
// })


export const fetchedRestaurantsData = (hook) => ({
    type: fetchRestaurantsSuccess,
    fetchedData: hook("./restaurants.json")
    // return (dispatch) => {
    //     const data = hook("./restaurants.json");
    //     dispatch(fetchedRestaurantsSuccess(data));
    // }

    // return {
    //     curr: (dispatch) => {
    //         const data = hook("./restaurants.json");
    //         dispatch(fetchedRestaurantsSuccess(data));
    //     }
    // }
})

export const handleInputChange = (inputValue) => ({
    type: inputChange,
    inputValue
});

export const handleSelectChange = (selectedValue) => ({
    type: dropdownSelect,
    selectedValue
});

export const handleRestaurantClick = (restaurantId) => ({
    type: restaurantClick,
    restaurantId
})

