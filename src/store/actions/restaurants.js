export const fetchRestaurantsData = 'fetchRestaurantsSuccess';
export const restaurantsInputChange = 'restaurantsInputChange';

export const handleInputChange = (inputValue) => ({
    type: restaurantsInputChange,
    inputValue: inputValue,
});

export const fetchedRestaurantsData = (data) => ({
    type: fetchRestaurantsData,
    fetchedData: data
});