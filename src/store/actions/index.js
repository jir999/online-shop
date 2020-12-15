export const dropdownSelect = "dropdownSelect";
export const restaurantsInputChange = "restaurantsInputChange";
export const restaurantClick = "restaurantClick";
export const fetchRestaurantsData = "fetchRestaurantsSuccess";
export const fetchKitchenTypes = "fetchKitchenTypes";
export const fetchMenu = "fetchMenu";
export const restaurantImageClick = "restaurantImageClick";
export const addToCartClick = "addToCartClick";
export const basketIconClick = "basketIconClic";
export const orderBtnClick = "orderBtnClick";


export const fetchedRestaurantsData = (data) => ({
    type: fetchRestaurantsData,
    fetchedData: data
})

export const fetchedKitchenTypes = (data) => ({
    type: fetchKitchenTypes,
    fetchedData: data
})

export const fetchedMenuData = (data) => ({
    type: fetchMenu,
    fetchedData: data
})

// export const handleRestaurantImageClick = () => ({
//     type: restaurantImageClick,
// })

export const handleInputChange = (inputValue) => ({
    type: restaurantsInputChange,
    inputValue: inputValue,
});


export const handleAddToCartClick = (currentMenuData, bool) => ({
    type: addToCartClick,
    currentMenuData,
    showBasket: bool,
})

export const handleBasketIconClick = (bool) => ({
    type: basketIconClick,
    showBasket: bool,
})

export const handleOrderBtnClick = () => ({
    type: orderBtnClick,
})

// export const handleSelectChange = (selectedValue) => ({
//     type: dropdownSelect,
//     selectedValue
// });

// export const handleRestaurantClick = (restaurantId) => ({
//     type: restaurantClick,
//     restaurantId
// })


