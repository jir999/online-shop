import { fetchRestaurantsData } from "../actions";
import { fetchKitchenTypes } from "../actions";
import {restaurantsInputChange} from "../actions";
import {fetchMenu} from "../actions";
import {addToCartClick} from "../actions";

// import RestaurantsState from "./RestaurantsState";


export const restaurantsData = (state = [], action) => {
    const { type, fetchedData, inputValue } = action;
    console.log("inputValue", inputValue)
    switch (type) {
        case fetchRestaurantsData:
            return fetchedData;
        case restaurantsInputChange:
            if(!inputValue){
                return state;
            }
        default:
            return state;
    }
};



// export const filteredRestaurants = (state = <RestaurantsState />, action) => {
//     const {type, inputValue} = action;
//     switch(type){
//         case restaurantsInputChange:
//         if(inputValue){
//             return state.filter((item) => item.name.includes(inputValue));
//         }

//         default:
//             return state;
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



export const menuData = (state = [], action) => {
    const { type, fetchedData } = action;
    switch(type){
        case fetchMenu:
            return fetchedData;
        default:
            return state;
    }
}

export const basketData = (state = [] , action) => {
    const {type, menuId} = action;
    switch(type){
        case addToCartClick:
            return state;
        default:
            return state;
    }
}