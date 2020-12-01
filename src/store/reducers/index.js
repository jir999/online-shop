import { fetchRestaurantsSuccess } from "../actions";

export const Restaurants = (state = [], action) => {
    const { type, fetchedData } = action;
    switch (type) {
        case fetchRestaurantsSuccess:
            return fetchedData;
        default:
            return state;
    }
}