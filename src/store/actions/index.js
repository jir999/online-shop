export const dropdownSelect = "dropdownSelect";
export const inputChange = "inputChange";
export const restaurantClick = "restaurantClick";
export const fetchRestaurantsData = "fetchRestaurantsSuccess";
export const fetchKitchenTypes = "fetchKitchenTypes";
export const fetchMenu = "fetchMenu";

export const fetchedRestaurantsData = (data) => ({
    type: fetchRestaurantsData,
    fetchedData: data
})


// export const fetchedRestaurantsSuccess = (fetchedData) => ({
//     type: fetchRestaurantsSuccess,
//     fetchedData
// })


// export const fetchedRestaurantsData = (hook) => ({
//     type: fetchRestaurantsData,
//     fetchedData: hook("./restaurants.json")
// })

export const fetchedKitchenTypes = (hook) => ({
    type: fetchKitchenTypes,
    fetchedData: hook("./kitchenTpes.json")
})

export const Menu = (hook) => ({
    type: fetchMenu,
    fetchedData: hook("./menus/")
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

