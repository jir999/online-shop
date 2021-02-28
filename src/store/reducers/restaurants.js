import { fetchRestaurantsData } from '../actions/restaurants';

export const restaurantsData = (state = [], action) => {
    const { type, fetchedData } = action;
    switch (type) {
        case fetchRestaurantsData:
            return fetchedData;
        default:
            return state;
    }
};