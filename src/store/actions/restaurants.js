export const fetchRestaurantsData = 'fetchRestaurantsSuccess';

export const fetchedRestaurantsData = (data) => ({
    type: fetchRestaurantsData,
    fetchedData: data
});