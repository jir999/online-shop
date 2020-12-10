import { fetchRestaurantsData } from "../actions";
import { fetchKitchenTypes } from "../actions";
import {restaurantsInputChange} from "../actions";
import {fetchMenu} from "../actions";
import {addToCartClick} from "../actions";
import {basketIconClick} from "../actions";

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

export const searchValue = (state = "", action) => {
    const {type, inputValue} = action;
    switch(type){
        case restaurantsInputChange:
            return inputValue.toLowerCase();
        default:
            return state;
    }
}



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

export const basketData = (state = {} , action) => {
    const {type, currentMenuData, showBasket} = action;
    switch(type){
        case addToCartClick:
            return {...currentMenuData, showBasket};
        case basketIconClick:
            console.log("click")
            return {...currentMenuData, showBasket};
        default:
            return state;
    }
}

// export const basketListData = (state = [] , action) => {
//     const {type, currentMenuData, showBasket} = action;
//     switch(type){
//         case addToCartClick:
//             const newState = [...state];
//             newState.push({...currentMenuData, showBasket})
//             return newState;
//             return [{...currentMenuData, showBasket}];
//         case basketIconClick:
//             return {...currentMenuData, showBasket};
//         default:
//             return state;
//     }
// }