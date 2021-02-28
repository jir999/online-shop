import { fetchMenu } from '../actions/menus';
import { addToCartDisableTrue } from '../actions/menus';
import { addToCartDisableFalse } from '../actions/menus';
import { addToCartDisableAllFalse } from '../actions/menus';

export const menuData = (state = [], action) => {
    const { type, fetchedData, clickedMenuId, disabledValue } = action;
    switch (type) {
        case fetchMenu:
            return fetchedData.map((menu) => {
                const newMenu = { ...menu };
                newMenu.addToCartDisabled = false;
                return newMenu;
            });
        // return fetchedData;
        case addToCartDisableAllFalse:
            return state.map((menu) => {
                const newMenu = { ...menu };
                newMenu.addToCartDisabled = false;
                return newMenu;
            });
        case addToCartDisableTrue:
            console.log('true', disabledValue)
            return state.map((menu) => {
                const newMenu = { ...menu };
                if (newMenu.id === clickedMenuId) {
                    newMenu.addToCartDisabled = disabledValue;
                }
                return newMenu;
            });
        case addToCartDisableFalse:
            console.log('false', disabledValue);
            return state.map((menu) => {
                const newMenu = { ...menu };
                if (newMenu.id === clickedMenuId) {
                    newMenu.addToCartDisabled = disabledValue;
                }
                return newMenu;
            })
        default:
            return state;
    }
};