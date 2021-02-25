import { fetchRestaurantsData, restaurantsInputChange } from '../actions/restaurants';

export const restaurantsData = (state = [], action) => {
    const { type, fetchedData, inputValue } = action;
    console.log("inputValue", inputValue)
    switch (type) {
        case fetchRestaurantsData:
            return fetchedData;
        case restaurantsInputChange:
            if (!inputValue) {
                return state;
            }
        default:
            return state;
    }
};