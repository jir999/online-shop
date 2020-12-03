import { fetchRestaurantsData } from "../actions";
import { fetchKitchenTypes } from "../actions";
import {restaurantsInputChange} from "../actions";

export const restaurantsData = (state = [], action) => {
    const { type, fetchedData, inputValue } = action;
    console.log("inputValue", inputValue)
    switch (type) {
        case fetchRestaurantsData:
            return fetchedData;
        case restaurantsInputChange:
            if(!inputValue){
                console.log("reduc default case")
                return state;
            }
            return state.filter((item) => item.name.includes(inputValue));
        default:
            return state;
    }
}

// export const filteredRestaurants = (state = [], action) => {
//     const {type, inputValue} = action;
//     switch(type){
//         case restaurantsInputChange:
//         if(inputValue){
//             return state.filter((item) => item.name.includes(inputValue));
//         }
//     }
// }

export const dropDownData = (state = [], action) => {
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