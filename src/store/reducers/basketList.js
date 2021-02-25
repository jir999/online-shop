import { addToCartClick, basketIconClick, orderBtnClick } from '../actions/basketList';

export const basketListData = (state = [], action) => {
    const { type, currentMenuData, showBasket } = action;
    switch (type) {
        case addToCartClick:
            const newState = [...state];
            newState.push({ ...currentMenuData, showBasket });
            console.log("newState", newState);
            return newState;
        //return [...state, currentMenuData, showBasket];
        case basketIconClick:
            return [];
        case orderBtnClick:
            return [];
        default:
            return state;
    }
};