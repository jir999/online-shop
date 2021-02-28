import { addToCartClick, basketIconClick, orderBtnClick, deleteBtnClick, minusIconClick, addIconClick } from '../actions/basketList';

export const basketListData = (state = [], action) => {
    const { type, currentMenuData, basketItemId, menuPrice, id } = action;
    switch (type) {
        case addToCartClick:
            const newState = [...state];
            // newState.push({ ...currentMenuData, showBasket });
            newState.push({ ...currentMenuData });
            return newState;
        //return [...state, currentMenuData, showBasket];
        case basketIconClick:
            return [];
        case minusIconClick:
            const minusedMenus = state.map((item) => {
                if (item.menuId === id) {
                    const newItem = { ...item };
                    newItem.menuPrice -= menuPrice;
                    return newItem;
                }
                return item;
            });
            return minusedMenus;
        case addIconClick:
            const addedMenus = state.map((item) => {
                if (item.menuId === id) {
                    const newItem = { ...item };
                    newItem.menuPrice += menuPrice;
                    return newItem;
                }
                return item;
            });
            return addedMenus;
        case deleteBtnClick:
            const filteredList = state.filter((menuItem) => {
                const newItem = { ...menuItem };
                newItem.menuPrice = menuPrice;
                return newItem.menuId !== basketItemId;
            });
            return filteredList;
        case orderBtnClick:
            return [];
        default:
            return state;
    }
};