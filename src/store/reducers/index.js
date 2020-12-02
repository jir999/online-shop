import { fetchRestaurantsData } from "../actions";
import { fetchKitchenTypes } from "../actions";

export const Restaurants = (state = [], action) => {
    const { type, fetchedData } = action;
    switch (type) {
        case fetchRestaurantsData:
            return fetchedData;
        default:
            return state;
    }
}

// export const Restaurants = (state = [], action) => {
//     const { type, fetchedData } = action;
//     switch (type) {
//         case fetchRestaurantsData:
//             return fetchedData;
//         default:
//             return state;
//     }
// }

export const KitchenTypes = (state = [], action) => {
    const { type, fetchedData } = action;
    switch (type) {
        case fetchKitchenTypes:
            return fetchedData;
        default:
            return state;
    }
}

// export const Menu = (state = [], action) => {
//     const { type }
// }